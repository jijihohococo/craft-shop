<template>
	<li :class="[ checkMenus() ? 'nav-item menu-open' : 
		'nav-item']">
		<a href="#" :class="[ checkMenus() ? 'nav-link active' : 'nav-link' ]">
		<i class="nav-icon fas fa-table"></i>
		<p>
			{{ title }}
			<i class="right far fa-circle text-info"></i>
		</p>
	</a>
	<ul class="nav nav-treeview" :style="[ checkMenus() ? 'display : block' : 'display : none']" >
	<li class="nav-item" v-for="(dataRoute, route) in dataRoutes">
		<router-link :to="'/admin/'+route" :class="[ (currentRoute == route) || 
		(route+'.edit'==currentRoute) || (route+'.create'==currentRoute) || (this.$route.params.model!==null && this.$route.params.model==dataRoute)  ? 'nav-link active' : 'nav-link' ]" >
		<p>{{ dataRoute }}</p>
	</router-link>
</li>
</ul>
</li>
</template>
<script >

	import { getModel } from '../helpers/check.js';

	export default {
		props : {
			dataRoutes : {
				type : Object
			},
			currentRoute : {
				type : String
			},
			title : {
				type : String
			}
		},
		methods : {
			checkMenus(){
				return	(this.$props.currentRoute in this.$props.dataRoutes)  || (this.$props.currentRoute.replace('.edit', '') in this.$props.dataRoutes) || (this.$props.currentRoute.replace('.create','') in this.$props.dataRoutes ) || (this.$props.currentRoute=='transaction' && this.$route.params.model!==null && 
					(getModel(this.$route.params.model) in this.$props.dataRoutes)  );
			}
		}
	}
</script>