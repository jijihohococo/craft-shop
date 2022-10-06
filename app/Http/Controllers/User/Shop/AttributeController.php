<?php

namespace App\Http\Controllers\User\Shop;

use App\Repositories\AttributeRepositoryInterface;

class AttributeController extends ContentController
{

    public $attribute;

    public $content='attribute';

    public function __construct(AttributeRepositoryInterface $attribute){
        $this->attribute=$attribute;
    }
}
