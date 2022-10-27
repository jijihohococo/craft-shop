const City = () => import('Admin/Views/City')
const CreateEditCity = () => import('Admin/Views/CreateEditCity');

export default [
	{
		path : 'city',
		component : City ,
		name : 'city'
	},
	{
		path : 'city/create',
		component : CreateEditCity,
		name : 'city.create'
	},
	{
		path : 'city/edit/:id',
		component : CreateEditCity,
		name : 'city.edit'
	},
	{
		path : 'city_bin',
		component : City ,
		name : 'city_bin'
	}
]