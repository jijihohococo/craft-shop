const Category = () => import('Admin/Views/Category');
const CreateEditCategory = () => import('Admin/Views/CreateEditCategory');

export default [
	{
		path : 'category',
		component : Category,
		name : 'category'
	},
	{
		path : 'category/create',
		component : CreateEditCategory,
		name : 'category.create'
	},
	{
		path : 'category/edit/:id',
		component : CreateEditCategory,
		name : 'category.edit'
	},
	{
		path : 'category_bin',
		component : Category,
		name : 'category_bin'
	}
]