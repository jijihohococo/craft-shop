<template>
	<li :class="[ menu==true ? 'nav-item menu-open' : 
		'nav-item']">
		<a href="#" :class="[ menu==true ? 'nav-link active' : 'nav-link' ]">
		<i class="nav-icon fas fa-table"></i>
		<p>
			{{ title }}
			<i class="right far fa-circle text-info"></i>
		</p>
	</a>
	<ul class="nav nav-treeview" :style="[ menu==true ? 'display : block' : 'display : none']" >
	<li class="nav-item" v-for="(dataRoute, route) in dataRoutes">
		<router-link :to="'/admin/'+route" :class="[ (currentRoute == route) ||
		(route+'_bin'==currentRoute) || 
		(route+'.variant'==currentRoute) ||
		(route+'.stock'==currentRoute) ||
		(route+'.stock.create'==currentRoute) ||
		(route+'.stock.edit'==currentRoute) ||
		(route+'.price'==currentRoute) ||
		(route+'.price.create'==currentRoute) ||
		(route+'.price.edit'==currentRoute) ||
		(route+'.edit'==currentRoute) ||
		(route+'.create'==currentRoute) ||
		(this.$route.params.model!==undefined && 
		(this.$route.params.model==dataRoute || 
		this.$route.params.model.substring(0,4)==dataRoute  ) )  ? 'nav-link active' : 'nav-link' ]" >
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
		data(){
			return {
				menu : ''
			}
		},
		watch : {
			currentRoute(newRoute, oldRoute){
				this.menu=this.checkMenus(newRoute);
			}
		},
		created(){
			this.menu=this.checkMenus(this.$props.currentRoute);
		},
		methods : {
			checkMenus(route=null){
				return	(route in this.$props.dataRoutes)  ||
				(route.replace('_bin','') in this.$props.dataRoutes ) ||
				(route.replace('.edit', '') in this.$props.dataRoutes) || 
				(route.replace('.create','') in this.$props.dataRoutes ) ||
				(route.replace('.variant','') in this.$props.dataRoutes ) ||
				(route.replace('.stock','') in this.$props.dataRoutes ) || 
				(route.replace('.stock.create','') in this.$props.dataRoutes ) ||
				(route.replace('.stock.edit','') in this.$props.dataRoutes ) ||
				(route.replace('.price','') in this.$props.dataRoutes ) || 
				(route.replace('.price.create','') in this.$props.dataRoutes ) ||
				(route.replace('.price.edit','') in this.$props.dataRoutes ) ||
				(route=='transaction' && this.$route.params.model!==undefined && 
				((getModel(this.$route.params.model) in this.$props.dataRoutes) ||
				(this.$route.params.model.toLowerCase().substring(0, 4) in this.$props.dataRoutes )) );
			}
		}
	}
</script>