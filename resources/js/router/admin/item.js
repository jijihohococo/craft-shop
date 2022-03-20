const Item = () => import('Admin/Views/Item');
const CreateEditItem = () => import('Admin/Views/CreateEditItem');

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

	}
]