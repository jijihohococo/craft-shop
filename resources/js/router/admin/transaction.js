const Transaction = () => import('Admin/Views/Transaction')

export default [
{
	path : 'transaction/:name/:model/:model_id',
	component : Transaction ,
	name : 'transaction'
},
{
	path : 'currency_transaction/:name/:main_content/:model/:model_id/:currency_id',
	component : Transaction ,
	name : 'currency.currency_rate_transaction'
},
{
	path : 'item_transaction/:name/:model/:model_id/:item_id' ,
	component : Transaction ,
	name : 'item.transaction'
}
]
