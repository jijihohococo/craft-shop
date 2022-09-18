const ItemStock = () => import('Admin/Views/ItemStock')
const CreateEditItemStock = () => import('Admin/Views/CreateEditItemStock')

export default [
{
	path : 'item/stock/:item_varaint_id',
	component : ItemStock ,
	name : 'item.stock'

},
{
	path : 'item/stock/create/:item_varaint_id',
	component : CreateEditItemStock,
	name : 'item.stock.create'
},
{
	path : 'item/stock/edit/:id',
	component : CreateEditItemStock,
	name : 'item.stock.edit'

}
]