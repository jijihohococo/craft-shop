const Page = () => import('Admin/Views/Page');
const CreateEditPage = () => import('Admin/Views/CreateEditPage');

export default [
	{
		path : 'page',
		component : Page,
		name : 'page'
	},
	{
		path : 'page/create',
		component : CreateEditPage,
		name : 'page.create'
	},
	{
		path : 'page/edit/:id',
		component : CreateEditPage,
		name : 'page.edit'
	},
	{
		path : 'page_bin',
		component : Page,
		name : 'page_bin'
	}
]