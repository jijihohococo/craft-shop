<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SeoResource extends JsonResource
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
            'title' => $this->title,
            'page_link' => $this->page_link,
            'description' => $this->description,
            'keywords' => $this->keywords,
            'properties' => $this->properties,
            'names' => $this->names
        ];
    }
}
