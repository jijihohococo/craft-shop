const EditSeo = () => import('Admin/Views/EditSeo');

export default [
	{
		path : 'seo/edit/:model/:model_id',
		component : EditSeo,
		name : 'seo.edit'
	}
]