const PrivacyPolicy = () => import('User/Views/PrivacyPolicy')
const ContactUs = () => import('User/Views/ContactUs')
const AboutUs = () => import('User/Views/AboutUs')
const Faq = () => import('User/Views/Faq')
const ReturnPolicy = () => import('User/Views/ReturnPolicy')
const TermsAndConditions = () => import('User/Views/TermsAndConditions')
const Home = () => import('User/Views/Home')
const ShoppingCart = () => import('User/Views/ShoppingCart')
const WishList = () => import('User/Views/WishList')
const Shop = () => import('User/Views/Shop')
const Register = () => import('User/Views/Register')
const Login = () => import('User/Views/Login')
const ItemDetail = () => import('User/Views/ItemDetail')
export default [
{
	path : '',
	component : Home,
	name : 'home'
},
{
	path : 'register',
	component : Register,
	name : 'register_page'
},
{
	path : 'login',
	component : Login,
	name : 'login_page'
},
{
	path : 'shop/category/:content_id',
	component : Shop ,
	name : 'shop_category'
},
{
	path : 'shop/subcategory/:content_id',
	component : Shop ,
	name : 'shop_subcategory'
},
{
	path : 'shop/brand/:content_id',
	component : Shop ,
	name : 'shop_brand'
},
{
	path : 'shop/all',
	component : Shop ,
	name : 'shop_all'
},
{
	path : 'privacy_policy',
	component : PrivacyPolicy ,
	name : 'privacy_policy',
	meta: {
		title: 'Nested - About Page - Example App'
	}
},
{
	path : 'contact_us',
	component : ContactUs ,
	name : 'contact_us'
},
{
	path : 'about_us',
	component : AboutUs ,
	name : 'about_us'
},
{
	path : 'faq',
	component : Faq ,
	name : 'faq_page'
},
{
	path : 'return_policy',
	component : ReturnPolicy ,
	name : 'return_policy'
},
{
	path : 'terms_and_conditions',
	component : TermsAndConditions ,
	name : 'terms_and_conditions'
},
{
	path : 'shopping_cart',
	component : ShoppingCart ,
	name : 'shopping_cart'	
},
{
	path : 'wishlist',
	component : WishList ,
	name : 'wishlist'
},
{
	path  : 'items/:id',
	component : ItemDetail ,
	name : 'items.detail'
}
]