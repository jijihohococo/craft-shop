const Role = () => import('Admin/Views/Role');
const CreateEditRole = () => import('Admin/Views/CreateEditRole');

export default [
	{
		path : 'role',
		component : Role ,
		name : 'role'

	},
	{
		path : 'role/create',
		component : CreateEditRole,
		name : 'role.create'
	},
	{
		path : 'role/edit/:id',
		component : CreateEditRole,
		name : 'role.edit'
	},
	{
		path : 'role_bin',
		component : Role,
		name : 'role_bin'
	}
]