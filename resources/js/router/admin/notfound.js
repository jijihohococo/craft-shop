const NotFound = () => import('Admin/Views/NotFound');

export default [
	{
		path : ':pathMatch(.*)*',
		component : NotFound ,
		name : 'notfound'
	}
]