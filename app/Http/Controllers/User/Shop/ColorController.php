<?php

namespace App\Http\Controllers\User\Shop;

use Illuminate\Http\Request;
use App\Repositories\ColorRepositoryInterface;
class ColorController extends ContentController
{
    //

    public $color;

    public $acceptArray=[
        'category',
        'subcategory',
        'brand'
    ];

    public function __construct(ColorRepositoryInterface $color){
        $this->color=$color;
        $this->content='color';
    }
}
