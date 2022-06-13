const Item = () => import('Admin/Views/Item');
const CreateEditItem = () => import('Admin/Views/CreateEditItem');
const ItemVariant = () => import('Admin/Views/ItemVariant');
export default [
	{
		path : 'item',
		component : Item,
		name : 'item'
	},
	{
		path : 'item/create',
		component : CreateEditItem,
		name : 'item.create'
	},
	{
		path : 'item/edit/:id',
		component : CreateEditItem,
		name : 'item.edit'

	},
	{
		path : 'item_bin',
		component : Item ,
		name : 'item_bin'
	},
	{
		path : 'item/variant/:id',
		component : ItemVariant,
		name : 'item.variant'
	}
]