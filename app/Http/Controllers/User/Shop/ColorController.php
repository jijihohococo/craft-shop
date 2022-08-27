<?php

namespace App\Http\Controllers\User\Shop;

use App\Repositories\ColorRepositoryInterface;
class ColorController extends ContentController
{
    //

    public $color;

    public $acceptArray=[
        'All',
        'category',
        'subcategory',
        'brand'
    ];

    public function __construct(ColorRepositoryInterface $color){
        $this->color=$color;
        $this->content='color';
    }
}
