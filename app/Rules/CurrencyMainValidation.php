<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\Currency;
class CurrencyMainValidation implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    private $currencyId;

    public function __construct($currencyId=NULL)
    {
        //
        $this->currencyId=$currencyId;
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
        //-------BE SURE THERE IS ONE MAIN CURRENCY-------//
        if($value==FALSE){
            return $this->currencyId==NULL ?
            Currency::where('main',TRUE)->count()==1 :
            Currency::where('main',TRUE)->count()==1 &&
            Currency::where('main',TRUE)->where('id',$this->currencyId)->count()==0;
        }
        return TRUE;
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
