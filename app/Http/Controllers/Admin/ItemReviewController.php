<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ItemReview;
class ItemReviewController extends Controller
{
    //
    public $model = 'Item';

    public function __construct(){
        $this->middleware('rolePermission:'.$this->model.',read')->only(['index']);
    }

    public function index($itemId){
        return response()->json([
            'reviews' => ItemReview::selectUser()
            ->selectItem()
            ->ofItem($itemId)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
