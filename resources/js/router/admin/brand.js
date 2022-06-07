const Brand = () => import('Admin/Views/Brand')
const CreateEditBrand = () => import('Admin/Views/CreateEditBrand');

export default [
	{
		path : 'brand',
		component : Brand ,
		name : 'brand'
	},
	{
		path : 'brand/create',
		component : CreateEditBrand,
		name : 'brand.create'
	},
	{
		path : 'brand/edit/:id',
		component : CreateEditBrand,
		name : 'brand.edit'
	},
	{
		path : 'brand_bin',
		component : Brand ,
		name : 'brand_bin'
	}
]