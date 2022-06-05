const Attribute = () => import('Admin/Views/Attribute')
const CreateEditAttribute = () => import('Admin/Views/CreateEditAttribute');

export default [
	{
		path : 'attribute',
		component : Attribute ,
		name : 'attribute'
	},
	{
		path : 'attribute/create',
		component : CreateEditAttribute,
		name : 'attribute.create'
	},
	{
		path : 'attribute/edit/:id',
		component : CreateEditAttribute,
		name : 'attribute.edit'
	},
	{
		path : 'attribute_bin',
		component : Attribute,
		name : 'attribute_bin'
	}
]