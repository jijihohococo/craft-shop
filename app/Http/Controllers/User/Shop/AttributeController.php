<?php

namespace App\Http\Controllers\User\Shop;

use Illuminate\Http\Request;
use App\Repositories\AttributeRepositoryInterface;

class AttributeController extends ContentController
{

    public $attribute;

    public $acceptArray=[
        'category',
        'subcategory',
        'brand'
    ];

    public function __construct(AttributeRepositoryInterface $attribute){
        $this->attribute=$attribute;
        $this->content='attribute';
    }
}
