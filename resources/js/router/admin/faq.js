const Faq = () => import('Admin/Views/Faq')
const EditFaq = () => import('Admin/Views/EditFaq');

export default [
	{
		path : 'faq',
		component : Faq ,
		name : 'faq'
	},
	{
		path : 'faq/edit',
		component : EditFaq,
		name : 'faq.edit'
	}
]