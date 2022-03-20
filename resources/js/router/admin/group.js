const Group = () => import('Admin/Views/Group');
const CreateEditGroup = () => import('Admin/Views/CreateEditGroup');

export default [
	{
		path : 'group',
		component : Group,
		name : 'group'
	},
	{
		path : 'group/create',
		component : CreateEditGroup,
		name : 'group.create'
	},
	{
		path : 'group/edit/:id',
		component : CreateEditGroup,
		name : 'group.edit'

	}
]