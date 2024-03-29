const Admin = () => import('Admin/Views/Admin')
const CreateEditAdmin = () => import('Admin/Views/CreateEditAdmin');

export default [
	{
		path : '/',
		component : Admin ,
		name : 'admin'
	},
	{
		path : 'admin',
		component : Admin ,
		name : 'admin'
	},
	{
		path : 'admin/create',
		component : CreateEditAdmin,
		name : 'admin.create'
	},
	{
		path : 'admin/edit/:id',
		component : CreateEditAdmin,
		name : 'admin.edit'
	},
	{
		path : 'admin_bin',
		component : Admin ,
		name : 'admin_bin'
	}
]