const State = () => import('Admin/Views/State')
const CreateEditState = () => import('Admin/Views/CreateEditState');

export default [
	{
		path : 'state',
		component : State ,
		name : 'state'
	},
	{
		path : 'state/create',
		component : CreateEditState,
		name : 'state.create'
	},
	{
		path : 'state/edit/:id',
		component : CreateEditState,
		name : 'state.edit'
	},
	{
		path : 'state_bin',
		component : State ,
		name : 'state_bin'
	}
]