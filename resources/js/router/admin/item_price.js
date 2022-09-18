const ItemPrice = () => import('Admin/Views/ItemPrice')
const CreateEditItemPrice = () => import('Admin/Views/CreateEditItemPrice')

export default [
{
	path : 'item/price/:item_varaint_id',
	component : ItemPrice ,
	name : 'item.price'

},
{
	path : 'item/price/create/:item_varaint_id',
	component : CreateEditItemPrice,
	name : 'item.price.create'
},
{
	path : 'item/price/edit/:id',
	component : CreateEditItemPrice,
	name : 'item.price.edit'

}
]