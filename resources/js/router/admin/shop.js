const Shop = () => import('Admin/Views/Shop')
const EditShop = () => import('Admin/Views/EditShop');

export default [
	{
		path : 'shop',
		component : Shop ,
		name : 'shop'
	},
	{
		path : 'shop/edit/:id',
		component : EditShop,
		name : 'shop.edit'
	}
]