<template>
	<li :class="[ (currentRoute in dataRoutes)  || (currentRoute.replace('.edit', '') in dataRoutes) || (currentRoute.replace('.create','') in dataRoutes ) ? 'nav-item menu-open' : 
	'nav-item']">
	<a href="#" :class="[ (currentRoute in dataRoutes) || (currentRoute.replace('.edit','') in dataRoutes ) || (currentRoute.replace('.create','') in dataRoutes ) ? 'nav-link active' : 'nav-link' ]">
		<i class="nav-icon fas fa-table"></i>
		<p>
			{{ title }}
			<i class="right fas fa-angle-left"></i>
		</p>
	</a>
	<ul class="nav nav-treeview" :style="[ (currentRoute in dataRoutes)  || (currentRoute.replace('.edit', '') in dataRoutes) || (currentRoute.replace('.create','') in dataRoutes ) ? 'display : block' : 'display : none']" >
		<li class="nav-item" v-for="(dataRoute, route) in dataRoutes">
			<router-link :to="'/admin/'+route" :class="[ (currentRoute == route) || 
			(route+'.edit'==currentRoute) || (route+'.create'==currentRoute)  ? 'nav-link active' : 'nav-link' ]" >
				<p>{{ dataRoute }}</p>
			</router-link>
		</li>
	</ul>
</li>
</template>
<script >
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
		}
	}
</script>