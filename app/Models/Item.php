<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\{CategoryDataTrait,BrandDataTrait,SubcategoryDataTrait,ColorDataTrait,SearchNameTrait,CreateAndUpdateSearch,DeleteSearch};
use Illuminate\Support\Facades\Cache;
class Item extends TransactionModel
{
    use SoftDeletes,CategoryDataTrait,BrandDataTrait,SubcategoryDataTrait,ColorDataTrait,SearchNameTrait,CreateAndUpdateSearch,DeleteSearch;

    protected $fillable=[
        'name',
        'brand_id',
        'category_id',
        'subcategory_id',
        'description'
    ];

    public static $cacheKey='items_cache';

    protected $dates = ['deleted_at'];

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
            \DB::raw(" SUBSTRING_INDEX( GROUP_CONCAT(item_images.filename) ,',',1) ")
        )->from('item_images')
        ->whereIn('item_variant_id',function($newQuery){
            $newQuery->select('id')
            ->from('item_variants')
            ->whereColumn('items.id','item_variants.item_id')
            ->groupBy('item_variants.item_id');
        });
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

  public function scopeSelectPrice($query){
    return $query->addSelect(['sale_price' => function($query){
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
    'normal_price' => function($query){
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
    'tax' => function($query){
     $query->selectSub(function($query){
        Tax::getTaxFromItemPrice($query);
    },'tax')
     ->from('item_prices')
     ->whereIn('item_prices.item_variant_id',function($newQuery){
         self::selectWithItemVariant($newQuery);
     })->orderBy('item_prices.id','DESC')
     ->limit(1);
 }
]);
}

public function getLaptops(){
    return Cache::tags( self::$cacheKey )->remember('laptops',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->where('category_id',1)
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getDesktops(){
    return Cache::tags( self::$cacheKey )->remember('desktops',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->where('category_id',2)
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getAccessories(){
    return Cache::tags( self::$cacheKey )->remember('accessories',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->where('category_id',3)
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getDesktopComponents(){
    return Cache::tags( self::$cacheKey )->remember('desktop_components',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->where('category_id',7)
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getGamingLaptops(){
    return Cache::tags( self::$cacheKey )->remember('desktop_components',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->where('subcategory_id',46)
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getGamingMouses(){
    return Cache::tags( self::$cacheKey )->remember('gaming_mouses',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->where('subcategory_id',48)
        ->latest('id')
        ->limit(7)
        ->get(); 
    });
}

public function getGamingKeyboards(){
    return Cache::tags( self::$cacheKey )->remember('gaming_keyboards',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->where('subcategory_id',49)
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getGamingHeadphones(){
    return Cache::tags( self::$cacheKey )->remember('gaming_headphones',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->where('subcategory_id',50)
        ->latest('id')
        ->limit(7)
        ->get();
    });
}

public function getFeatureProducts(){
    return Cache::tags( self::$cacheKey )->remember('feature_products',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->latest('id')
        ->limit(15)
        ->get();
    });
}
public function getAll(){
    return Cache::tags( self::$cacheKey )->remember('all-items',60*60*24,function(){
        return self::selectItemDataWithImages()
        ->selectPrice()
        ->latest('id')
        ->get();
    });
}
}
