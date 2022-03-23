const Transaction = () => import('Admin/Views/Transaction')

export default [
{
	path : 'transaction/:name/:model/:model_id',
	component : Transaction ,
	name : 'transaction'
}
]
