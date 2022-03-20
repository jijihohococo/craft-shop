const Target = () => import('Admin/Views/Target');
const CreateEditTarget = () => import('Admin/Views/CreateEditTarget');

export default [
	{
		path : 'target',
		component : Target ,
		name : 'target'

	},
	{
		path : 'target/create',
		component : CreateEditTarget,
		name : 'target.create'
	},
	{
		path : 'target/edit/:id',
		component : CreateEditTarget,
		name : 'target.edit'

	}
]