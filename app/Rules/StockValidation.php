<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\ItemStock;
class StockValidation implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public $itemVariantId;
    public function __construct($itemVariantId)
    {
        //
        $this->itemVariantId=$itemVariantId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        //
        $itemStock=ItemStock::where('item_variant_id',$this->itemVariantId)->latest('id')->first();
        return $itemStock!==NULL ? $itemStock->stock >= $value : request()->qty >= $value;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The available stock is more than stock';
    }
}
