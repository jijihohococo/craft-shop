<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\WishList;
class WishListValidation implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public $itemId , $userId;
    public function __construct($itemId,$userId)
    {
        //
        $this->itemId=$itemId;
        $this->userId=$userId;
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
        return WishList::ofUser( $this->userId )
        ->ofItem( $this->itemId )
        ->count()==1;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
