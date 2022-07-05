<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\CategoryDataTrait;
class Item extends TransactionModel
{
    use HasFactory,SoftDeletes,CategoryDataTrait;

    protected $fillable=[
        'name',
        'brand_id',
        'category_id',
        'subcategory_id',
        'description'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Item";

    public function category(){
        return $this->belongsTo('App\Models\Category')->withDefault()->withTrashed();
    }

    public function subcategory(){
        return $this->belongsTo('App\Models\Subcategory')->withDefault()->withTrashed();
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
        $selectColorId='colors.id IN  (SELECT item_variants.color_id FROM item_variants WHERE item_variants.item_id=items.id)';
        return $query->addSelect(['variants' => function($query){
            $query->select(\DB::raw('GROUP_CONCAT(item_variants.id)'))
            ->from('item_variants')
            ->whereColumn('items.id','item_variants.item_id')
            ->groupBy('item_variants.item_id');
        } , 'colorCodes' => function($query) use($selectColorId) {
            $query->select(\DB::raw('GROUP_CONCAT(colors.color_code)'))
            ->from('colors')
            ->whereRaw($selectColorId);
        }  ]);
    }
}
