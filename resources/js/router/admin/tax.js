const Tax = () => import('Admin/Views/Tax')
const CreateEditTax = () => import('Admin/Views/CreateEditTax');

export default [
	{
		path : 'tax',
		component : Tax ,
		name : 'tax'
	},
	{
		path : 'tax/create',
		component : CreateEditTax,
		name : 'tax.create'
	},
	{
		path : 'tax/edit/:id',
		component : CreateEditTax,
		name : 'tax.edit'
	},
	{
		path : 'tax_bin',
		component : Tax,
		name : 'tax_bin'
	}
]