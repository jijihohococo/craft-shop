<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
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
            'name' => $this->name ,
            'category_id' => $this->category_id ,
            'subcategory_id' => $this->subcategory_id ,
            'brand_id' => $this->brand_id ,
            'description' => $this->description ,
            'category_name' => $this->category_name ,
            'subcategory_name' => $this->subcategory_name ,
            'brand_name' => $this->brand_name ,
            'variants' => ItemVariantResource::collection(
                $this->itemVariants)
        ];
    }
}
