<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Faq;
class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Faq::insert([
            ['question' =>'What payment methods do you accept?',
            'answer' =>'We accept credit/debit cards (Visa, Mastercard, Discover, and American Express), PayPal, and Apple Pay.'],
            ['question'=>'What is your shipping policy?',
            'answer'=>'We offer free standard shipping on all orders over $50 within the United States. For orders under $50, shipping costs will be calculated at checkout. We also offer expedited shipping options for an additional cost.'],
            ['question'=>'What is your return policy?',
            'answer'=>'We offer a 30-day return policy for all items purchased through our online store. To initiate a return, please contact our customer service team and they will provide instructions on how to proceed.']
    ]);
    }
}
