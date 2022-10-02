<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\{CategoryDataTrait,BrandDataTrait,SubcategoryDataTrait,ColorDataTrait,SearchNameTrait,DeleteSearch};
use Illuminate\Support\Facades\Cache;
class Item extends TransactionModel
{
    use SoftDeletes,CategoryDataTrait,BrandDataTrait,SubcategoryDataTrait,ColorDataTrait,SearchNameTrait,DeleteSearch;

    protected $fillable=[
        'name',
        'brand_id',
        'category_id',
        'subcategory_id',
        'description'
    ];

    public static $cacheKey='items_cache';

    protected $dates = ['deleted_at'];

    private $salePrice='sale_price';

    private $normalPrice='normal_price';

    private $stock='available_stock';

    public function taxes(){
        return $this->hasMany('App\Models\ItemTax');
    }

    public function category(){
        return $this->belongsTo('App\Models\Category')->withDefault()->withTrashed();
    }

    public function subcategory(){
        return $this->belongsTo('App\Models\Subcategory')->withDefault()->withTrashed();
    }

    public function itemVariants(){
        return $this->hasMany('App\Models\ItemVariant');
    }

    public function scopeSearchData($query,$searchData){
        return $query->searchWithName( $searchData )
        ->searchWithCategory($searchData)
        ->searchWithSubcategory($searchData)
        ->searchWithBrand($searchData)
        ->searchWithColor($searchData);
    }

    public function scopeSelectItemData($query){
        return $query->selectCategory()
        ->selectSubcategory()
        ->selectBrand()
        ->selectItemVariants();
    }

    public function scopeSelectItemDataWithImages($query){
        return $query->selectCategory()
        ->selectSubcategory()
        ->selectBrand()
        ->selectItemImageWithVariants();
    }

    public function brand(){
        return $this->belongsTo('App\Models\Brand')->withDefault()->withTrashed();
    }

    public function scopeWhereInAttributeSets($query,$sets){
        return $query->whereIn('id',function($query) use ($sets) {
            $query->select('item_id')
            ->from('item_attributes')
            ->whereIn('item_attributes.id',function($query) use($sets) {
                $query->select('item_attribute_id')
                ->from('item_attribute_sets')
                ->whereIn('set_id',$sets);
            });
        });
    }

    public function scopeSelectItemVariants($query){
        return $query->addSelect(['variants' => function($query){
            $query->select(\DB::raw('GROUP_CONCAT(item_variants.id)'))
            ->from('item_variants')
            ->whereColumn('items.id','item_variants.item_id')
            ->groupBy('item_variants.item_id');
        } , 'colorCodes' => function($query){
            $query->select(\DB::raw('GROUP_CONCAT(colors.color_code)'))
            ->from('colors')
            ->whereIn('colors.id',function($query){
                $query->select('color_id')
                ->from('item_variants')
                ->whereColumn('item_variants.item_id','items.id');
            });
        }  ]);
    }

    public static function selectImage($query){
        return $query->select(
            'item_images.filename'
            //\DB::raw(getLastData('item_images.filename'))
        )->from('item_images')
        ->whereIn('item_variant_id',function($newQuery){
            self::selectWithItemVariant($newQuery);
        })->orderBy('item_images.id','DESC')
        ->limit(1);
    }

    public function scopeSelectItemImageWithVariants($query){
        return $query->addSelect(['image' => function($query){
            self::selectImage($query);
        } ]);
    }

    public static function selectWithItemVariant($newQuery){
      return  $newQuery->select('item_variants.id')
      ->from('item_variants')
      ->whereColumn('items.id','item_variants.item_id')
      ->groupBy('item_variants.item_id');   
  }

  public function scopeSelectStock($query){
    return  $query->addSelect([
        $this->stock => function($query){
            $query->select('item_stocks.available_stock')
            ->from('item_stocks')
            ->whereIn('item_stocks.item_variant_id',function($query) {
                self::selectWithItemVariant($query);
            } )->orderBy('item_stocks.id','DESC')
            ->limit(1);
        }
    ]);
  }

  public function scopeSelectReviews($query){
    return $query->addSelect([
        'reviews' => function($query){
            $query->select(
                \DB::raw('GROUP_CONCAT(item_reviews.rate)')
            )->from('item_reviews')
            ->whereColumn('items.id','item_reviews.item_id');
        }
    ]);
  }

  public function scopeSelectPrice($query){
    return $query->addSelect([$this->salePrice => function($query){
        $query->select(
            \DB::raw(
                ItemPrice::SALE_PRICE_SQL
            )
        )
        ->from('item_prices')
        ->whereIn('item_prices.item_variant_id',function($newQuery){
            self::selectWithItemVariant($newQuery);
        })->orderBy('item_prices.id','DESC')
        ->limit(1);
    } , 
    $this->normalPrice => function($query){
        $query->select(
            \DB::raw(
                ItemPrice::NORMAL_PRICE_SQL
            )
        )->from('item_prices')
        ->whereIn('item_prices.item_variant_id',function($newQuery){
            self::selectWithItemVariant($newQuery);
        })->orderBy('item_prices.id','DESC')
        ->limit(1);
    },
 //    'tax' => function($query){
 //     $query->selectSub(function($query){
 //        Tax::getTaxFromItemPrice($query);
 //    },'tax')
 //     ->from('item_prices')
 //     ->whereIn('item_prices.item_variant_id',function($newQuery){
 //         self::selectWithItemVariant($newQuery);
 //     })->orderBy('item_prices.id','DESC')
 //     ->limit(1);
 // }
]);
}

public function scopeHavePrice($query){
    return $query->having($this->salePrice,'>',0)
    ->having($this->normalPrice,'>',0);
}

public function scopeHaveStock($query){
    return $query->having($this->stock,'>',0);
}

public function scopeBetweenPrice($query,$minPrice,$maxPrice){
    return $query->having($this->normalPrice,'>=',$minPrice)
    ->having($this->normalPrice,'<=',$maxPrice);
}

public function scopeInWish($query){
    return $query->addSelect(['in_wish' => function($query){
        return $query->select('id')
        ->from('wish_lists')
        ->whereColumn('items.id','wish_lists.item_id')
        ->where('wish_lists.user_id', (string) getUserId( authId() ) );
    } ]);
}

public function scopeSelectShopItem($query){
    return $query->selectItemDataWithImages()
        ->selectItemVariants()
        ->selectReviews()
        ->selectPrice()
        ->selectStock()
        ->inWish();
}

public function scopeAvailable($query){
    return $query->havePrice()
    ->haveStock();
}

public function getLaptops(){
    return Cache::tags( self::$cacheKey )->remember('laptops',60*60*24,function(){
        return self::selectShopItem()
        ->where('category_id',1)
        ->available()
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getDesktops(){
    return Cache::tags( self::$cacheKey )->remember('desktops',60*60*24,function(){
        return self::selectShopItem()
        ->where('category_id',2)
        ->available()
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getAccessories(){
    return Cache::tags( self::$cacheKey )->remember('accessories',60*60*24,function(){
        return self::selectShopItem()
        ->where('category_id',3)
        ->available()
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getDesktopComponents(){
    return Cache::tags( self::$cacheKey )->remember('desktop_components',60*60*24,function(){
        return self::selectShopItem()
        ->where('category_id',7)
        ->available()
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getGamingLaptops(){
    return Cache::tags( self::$cacheKey )->remember('desktop_components',60*60*24,function(){
        return self::selectShopItem()
        ->where('subcategory_id',46)
        ->available()
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getGamingMouses(){
    return Cache::tags( self::$cacheKey )->remember('gaming_mouses',60*60*24,function(){
        return self::selectShopItem()
        ->where('subcategory_id',48)
        ->available()
        ->latest('id')
        ->limit(7)
        ->get(); 
    });
}

public function getGamingKeyboards(){
    return Cache::tags( self::$cacheKey )->remember('gaming_keyboards',60*60*24,function(){
        return self::selectShopItem()
        ->where('subcategory_id',49)
        ->available()
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getGamingHeadphones(){
    return Cache::tags( self::$cacheKey )->remember('gaming_headphones',60*60*24,function(){
        return self::selectShopItem()
        ->where('subcategory_id',50)
        ->available()
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getFeatureProducts(){
    return Cache::tags( self::$cacheKey )->remember('feature_products',60*60*24,function(){
        return self::selectShopItem()
        ->available()
        ->latest('id')
        ->limit(15)
        ->get();
    });
}
public function getAll(){
    return Cache::tags( self::$cacheKey )->remember('all-items',60*60*24,function(){
        return self::select(['id','name'])
        ->selectPrice()
        ->selectStock()
        ->available()
        ->latest('id')
        ->get();
    });
}
}
