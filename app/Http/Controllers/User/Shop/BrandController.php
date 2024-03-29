<?php

namespace App\Http\Controllers\User\Shop;

use App\Repositories\BrandRepositoryInterface;

class BrandController extends ContentController
{
    
    public $brand;

    public $content='brand';

    public function __construct(BrandRepositoryInterface $brand){
        $this->brand=$brand;
    }
}
