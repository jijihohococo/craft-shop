const Permission = () => import('Admin/Views/Permission');
const CreateEditPermission = () => import('Admin/Views/CreateEditPermission');

export default [
	{
		path : 'permission',
		component : Permission ,
		name : 'permission'

	},
	{
		path : 'permission/create',
		component : CreateEditPermission,
		name : 'permission.create'
	},
	{
		path : 'permission/edit/:id',
		component : CreateEditPermission,
		name : 'permission.edit'

	}
]