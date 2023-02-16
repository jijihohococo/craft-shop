import { menu_show , mobile } from '../store';
export var mix={
	data(){
		return {
			menu_show,
			mobile
		}
	},
	created(){
		this.mobile.checkMobile();
		this.menu_show.changeData(this.$route.name,this.mobile.data);
		window.scrollTo(0, 0);
	}
}