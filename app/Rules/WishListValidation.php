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
    public $userId;
    public function __construct($userId)
    {
        //
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
        ->ofItem( $value )
        ->count()==1;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Duplicated Item in Wish List';
    }
}
