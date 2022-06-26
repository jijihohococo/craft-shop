const Subcategory = () => import('Admin/Views/Subcategory');
const CreateEditSubcategory = () => import('Admin/Views/CreateEditSubcategory');

export default [
	{
		path : 'subcategory',
		component : Subcategory,
		name : 'subcategory'
	},
	{
		path : 'subcategory/create',
		component : CreateEditSubcategory,
		name : 'subcategory.create'
	},
	{
		path : 'subcategory/edit/:id',
		component : CreateEditSubcategory,
		name : 'subcategory.edit'
	},
	{
		path : 'subcategory_bin',
		component : Subcategory,
		name : 'subcategory_bin'
	}
]