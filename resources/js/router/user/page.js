const PrivacyPolicy = () => import('User/Views/PrivacyPolicy')
const ContactUs = () => import('User/Views/ContactUs')
const AboutUs = () => import('User/Views/AboutUs')
const FAQ = () => import('User/Views/FAQ')
const ReturnPolicy = () => import('User/Views/ReturnPolicy')
const TermsAndConditions = () => import('User/Views/TermsAndConditions')
const Home = () => import('User/Views/Home')
const ShoppingCart = () => import('User/Views/ShoppingCart')
const WishList = () => import('User/Views/WishList')
const Shop = () => import('User/Views/Shop')
const Register = () => import('User/Views/Register')
const Login = () => import('User/Views/Login')
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
	path : 'shop',
	component : Shop ,
	name : 'shop_page'
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
	component : FAQ ,
	name : 'faq'
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
	path : 'wish_list',
	component : WishList ,
	name : 'wish_list'
}
]