const Order = () => import('Admin/Views/Order');
const EditOrder = () => import('Admin/Views/EditOrder');


export default [
	{
		path : 'order',
		component : Order,
		name : 'order',
		meta : {
			requireAdmin : true
		}

	},
	{
		path : 'order/:id',
		component : EditOrder,
		name : 'order.edit',
		meta : {
			requireAdmin : true
		}

	}
]