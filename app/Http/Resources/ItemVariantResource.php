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
        return [
            'id' => $this->id ,
            'color_id' => $this->color_id ,
            'color' => $this->color ,
            'images' => $this->images ,
            'sale_price' => $this->sale_price ,
            'normal_price' => $this->normal_price
        ];
    }
}
