const EditSeo = () => import('Admin/Views/EditSeo');

export default [
	{
		path : 'seo/edit/:id',
		component : EditSeo,
		name : 'seo.edit'
	}
]