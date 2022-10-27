const Country = () => import('Admin/Views/Country')
const CreateEditCountry = () => import('Admin/Views/CreateEditCountry');

export default [
	{
		path : 'country',
		component : Country ,
		name : 'country'
	},
	{
		path : 'country/create',
		component : CreateEditCountry,
		name : 'country.create'
	},
	{
		path : 'country/edit/:id',
		component : CreateEditCountry,
		name : 'country.edit'
	},
	{
		path : 'country_bin',
		component : Country ,
		name : 'country_bin'
	}
]