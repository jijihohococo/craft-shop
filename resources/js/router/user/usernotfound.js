const NotFound = () => import('User/Views/NotFound');

export default [
	{
		path : ':pathMatch(.*)*',
		component : NotFound ,
		name : 'usernotfound'
	}
]