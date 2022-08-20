<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ColorRepositoryInterface;
class ColorController extends Controller
{
    //
    public $color;

    public function __construct(ColorRepositoryInterface $color){
        $this->color=$color;
    }
}
