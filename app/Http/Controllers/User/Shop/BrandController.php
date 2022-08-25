<?php

namespace App\Http\Controllers\User\Shop;

use App\Repositories\BrandRepositoryInterface;

class BrandController extends ContentController
{
    
    public $brand;

    public $acceptArray=[
        'category',
        'subcategory'
    ];

    public function __construct(BrandRepositoryInterface $brand){
        $this->brand=$brand;
        $this->content='brand';
    }
}
