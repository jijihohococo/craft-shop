const SocialMedia = () => import('Admin/Views/SocialMedia')
const CreateEditSocialMedia = () => import('Admin/Views/CreateEditSocialMedia');

export default [
	{
		path : 'social_media',
		component : SocialMedia ,
		name : 'social_media'
	},
	{
		path : 'social_media/create',
		component : CreateEditSocialMedia,
		name : 'social_media.create'
	},
	{
		path : 'social_media/edit/:id',
		component : CreateEditSocialMedia,
		name : 'social_media.edit'
	},
	{
		path : 'social_media_bin',
		component : SocialMedia,
		name : 'social_media_bin'
	}
]