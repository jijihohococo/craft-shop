const Color = () => import('Admin/Views/Color')
const CreateEditColor = () => import('Admin/Views/CreateEditColor');

export default [
	{
		path : 'color',
		component : Color ,
		name : 'color'
	},
	{
		path : 'color/create',
		component : CreateEditColor,
		name : 'color.create'
	},
	{
		path : 'color/edit/:id',
		component : CreateEditColor,
		name : 'color.edit'
	}
]