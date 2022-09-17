const ItemStock = () => import('Admin/Views/ItemStock')
const CreateEditItemStock = () => import('Admin/Views/CreateEditItemStock')

export default [
{
	path : 'item_stock/:item_varaint_id',
	component : ItemStock ,
	name : 'item_stock'

},
{
	path : 'item_stock/create/:item_varaint_id',
	component : CreateEditItemStock,
	name : 'item_stock.create'
},
{
	path : 'item_stock/edit/:id',
	component : CreateEditItemStock,
	name : 'item_stock.edit'

}
]