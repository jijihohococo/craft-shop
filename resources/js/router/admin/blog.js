const Blog = () => import('Admin/Views/Blog')
const CreateEditBlog = () => import('Admin/Views/CreateEditBlog');

export default [
	{
		path : 'blog',
		component : Blog ,
		name : 'blog'
	},
	{
		path : 'blog/create',
		component : CreateEditBlog,
		name : 'blog.create'
	},
	{
		path : 'blog/edit/:id',
		component : CreateEditBlog,
		name : 'blog.edit'
	},
	{
		path : 'blog_bin',
		component : Blog ,
		name : 'blog_bin'
	}
]