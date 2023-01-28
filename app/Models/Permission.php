<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Permission extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable = [
        'name',
        'model',
        'create',
        'read',
        'update',
        'delete'];

        public static function getModels(){
            return [
                'Permission',
                'Shop',
                'Admin',
                'Banner',
                'Category',
                'Subcategory',
                'Brand',
                'Item',
                'ItemStock',
                'ItemPrice',
                'Role',
                'Target',
                'User',
                'Currency',
                'CurrencyRate',
                'Tax',
                'Attribute',
                'Color',
                'Country',
                'State',
                'City',
                'Order',
                'Promotion',
                'Collection',
                'SocialMedia',
                'Blog',
                'Faq',
                'Page',
                'CustomerService',
                'Seo'
            ];
        }

        public static function getExceptModels(){
            return [
                'ItemStock',
                'ItemPrice'
            ];
        }

        public static function getActions(){
            return [
                'create',
                'read',
                'update',
                'delete'
            ];
        }

        public static $cacheKey='permissions_cache';

        public function getAll(){
            return Cache::tags( self::$cacheKey )->remember('all-permissions',DateModel::ONE_DAY,function(){
                return self::latest('name')->get();
            });
        }

        public static function searchByActions($search,$searchResult,$trash=FALSE){
            foreach(self::getActions() as $action ){
                if(strpos($action, $search)!==false){
                  return $trash==FALSE ?
                  self::where($action,TRUE)
                  ->latest('id')
                  ->paginate(10) :
                  self::onlyTrashed()
                  ->where($action,TRUE)
                  ->latest('id')
                  ->paginate(10);  
              }
          }
          return $searchResult;
          
      }
  }
