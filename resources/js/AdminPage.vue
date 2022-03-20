<template v-if="preference">
	<template v-if="currentRoute=='login'">
		<router-view />
	</template>
	<template v-else >
		<!-- Preloader -->
		<!-- <div class="preloader flex-column justify-content-center align-items-center">
			<img class="animation__shake" :src="'/dist/img/AdminLTELogo.png'" alt="AdminLTELogo" height="60" width="60">
		</div> -->
		<div class="wrapper">
			<Navigation />
			<Menu />
			<div class="content-wrapper">
				<router-view />
			</div>
			<footer class="main-footer">
				<strong>Copyright &copy; {{ currentYear }} <a >Craft Shop</a>.</strong>
				All rights reserved.
			</footer>
		</div>
	</template>
</template>
<script >
	import Navigation from './admin/components/Navigation';
	import Menu from './admin/components/Menu';
	export default {
		data(){
			return {
				currentYear : new Date().getFullYear()
			}
		},
		components: {
			Navigation,
			Menu
		},
		computed : {
			checkValue : function() {
				return this.preference ? true : false
			},
			currentRoute: function () {
				return this.$route.name
			},
		}
	}
</script>