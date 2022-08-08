<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\ItemPrice;
class ItemVariantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $itemPrice=ItemPrice::where('item_variant_id',$this->id)
        ->orderBy('id','DESC')->limit(1)->first();
        return [
            'id' => $this->id ,
            'color_id' => $this->color_id ,
            'color' => $this->color ,
            'images' => $this->images
        ];
    }
}
