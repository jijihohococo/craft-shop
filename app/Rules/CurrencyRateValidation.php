<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\CurrencyRate;
class CurrencyRateValidation implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    private $mainCurrencyId;

    public function __construct($mainCurrencyId)
    {
        //
        $this->mainCurrencyId=$mainCurrencyId;
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
        return CurrencyRate::where('main_currency_id',$this->mainCurrencyId)->where('used_currency_id',$value)
        ->count()==0;
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
