const Collection = () => import('Admin/Views/Collection')
const CreateEditCollection = () => import('Admin/Views/CreateEditCollection');

export default [
	{
		path : 'collection',
		component : Collection ,
		name : 'collection'
	},
	{
		path : 'collection/create',
		component : CreateEditCollection,
		name : 'collection.create'
	},
	{
		path : 'collection/edit/:id',
		component : CreateEditCollection,
		name : 'collection.edit'
	},
	{
		path : 'collection_bin',
		component : Collection,
		name : 'collection_bin'
	}
]