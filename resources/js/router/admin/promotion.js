const Promotion = () => import('Admin/Views/Promotion');
const CreateEditPromotion = () => import('Admin/Views/CreateEditPromotion');

export default [
	{
		path : 'promotion',
		component : Promotion ,
		name : 'promotion'

	},
	{
		path : 'promotion/create',
		component : CreateEditPromotion,
		name : 'promotion.create'
	},
	{
		path : 'promotion/edit/:id',
		component : CreateEditPromotion,
		name : 'promotion.edit'

	},
	{
		path : 'promotion_bin',
		component : Promotion ,
		name : 'promotion_bin'
	}
]