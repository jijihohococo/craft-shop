<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\{CategoryDataTrait,SearchNameTrait};
class Item extends TransactionModel
{
    use HasFactory,SoftDeletes,CategoryDataTrait,SearchNameTrait;

    protected $fillable=[
        'name',
        'brand_id',
        'category_id',
        'subcategory_id',
        'description'
    ];
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

    public function scopeSearchWithBrand($query,$searchData){
        return $query->orWherein('brand_id',
            function($query) use($searchData){
                $query->select('id')
                ->from('brands')
                ->where('name','like',$searchData);
        });
    }

    public function scopeSearchWithSubcategory($query,$searchData){
        return $query->orWherein('subcategory_id',
            function($query) use($searchData){
                $query->select('id')
                ->from('subcategories')
                ->where('name','like',$searchData);
            });
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

    public function scopeSelectSubcategory($query){
        return $query->addSelect(['subcategory_name' => function($query) {
            $query->select('name')
            ->from('subcategories')
            ->whereColumn('subcategory_id','subcategories.id')
            ->limit(1);
        } ]);
    }

    public function brand(){
        return $this->belongsTo('App\Models\Brand')->withDefault()->withTrashed();
    }

    public function scopeSelectBrand($query){
        return $query->addSelect(['brand_name' => function($query) {
            $query->select('name')
            ->from('brands')
            ->whereColumn('brand_id','brands.id')
            ->limit(1);
        } ]); 
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
}
