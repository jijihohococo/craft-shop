const PrivacyPolicy = () => import('User/Views/PrivacyPolicy')
const ContactUs = () => import('User/Views/ContactUs')
const AboutUs = () => import('User/Views/AboutUs')
const FAQ = () => import('User/Views/FAQ')
const ReturnPolicy = () => import('User/Views/ReturnPolicy')
const TermsAndConditions = () => import('User/Views/TermsAndConditions')
const Home = () => import('User/Views/Home')
const ShoppingCart = () => import('User/Views/ShoppingCart')

export default [
{
	path : '',
	component : Home,
	name : 'home'
},
{
	path : 'privacy_policy',
	component : PrivacyPolicy ,
	name : 'privacy_policy'
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
}
]