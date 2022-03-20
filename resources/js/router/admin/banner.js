const Banner = () => import('Admin/Views/Banner')
const CreateEditBanner = () => import('Admin/Views/CreateEditBanner');

export default [
	{
		path : 'banner',
		component : Banner ,
		name : 'banner'
	},
	{
		path : 'banner/create',
		component : CreateEditBanner,
		name : 'banner.create'
	},
	{
		path : 'banner/edit/:id',
		component : CreateEditBanner,
		name : 'banner.edit'
	}
]