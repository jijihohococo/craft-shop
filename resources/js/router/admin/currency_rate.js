const CurrencyRate = () => import('Admin/Views/CurrencyRate')
const CreateEditCurrencyRate = () => import('Admin/Views/CreateEditCurrencyRate')

export default [
{
	path : 'currency/currency_rate/:currency_id',
	component : CurrencyRate ,
	name : 'currency.currency_rate'

},
{
	path : 'currency/currency_rate/create/:currency_id',
	component : CreateEditCurrencyRate,
	name : 'currency.currency_rate.create'
},
{
	path : 'currency/currency_rate/edit/:id/:currency_id',
	component : CreateEditCurrencyRate,
	name : 'currency.currency_rate.edit'

}
]