<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class CurrencyExchangeValidation implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    private $currencyRate;
    public function __construct($currencyRate)
    {
        //
        $this->currencyRate=$currencyRate;
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
        return $this->currencyRate->main_currency_id!==
        $this->currencyRate->used_currency_id;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "You can't change your main currency value";
    }
}
