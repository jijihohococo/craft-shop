<?php

namespace App\Http\Controllers\User\Shop;

use App\Repositories\ColorRepositoryInterface;
class ColorController extends ContentController
{
    //

    public $color;

    public $content='color';

    public function __construct(ColorRepositoryInterface $color){
        $this->color=$color;
    }
}
