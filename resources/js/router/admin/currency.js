const Currency = () => import('Admin/Views/Currency');
const CreateEditCurrency = () => import('Admin/Views/CreateEditCurrency');

export default [
	{
		path : 'currency',
		component : Currency ,
		name : 'currency'

	},
	{
		path : 'currency/create',
		component : CreateEditCurrency,
		name : 'currency.create'
	},
	{
		path : 'currency/edit/:id',
		component : CreateEditCurrency,
		name : 'currency.edit'

	},
	{
		path : 'currency_bin',
		component : Currency,
		name : 'currency_bin'
	}
]