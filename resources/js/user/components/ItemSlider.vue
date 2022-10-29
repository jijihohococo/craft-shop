<template>
	<div class="row">
		<div class="col-12">
			<div class="heading_tab_header">
				<div class="heading_s2">
					<h2>{{ main_title }}</h2>
				</div>
				<div class="tab-style2">
					<button class="navbar-toggler" type="button" data-toggle="collapse" :data-target="'#'+api" aria-expanded="false"> 
						<span class="ion-android-menu"></span>
					</button>
					<ul class="nav nav-tabs justify-content-center justify-content-md-end" :id="api" role="tablist">
						<li class="nav-item" v-for="(title,key) in titles">
							<a :class="[key==0 ? 'nav-link active':
							'nav-link']"
							:id="title.link+'-tab'"
							data-toggle="tab"
							:href="'#'+title.link"
							role="tab" 
							:aria-controls="title.link"
							aria-selected="true">{{ title.name }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<div class="tab_slider">
				<SliderDetail v-for="(title,key) in titles"
				:content="title.link"
				:tab_class="showFadeClass(key)"
				:items="getItems(items,key)"
				/>
			</div>
		</div>
	</div>
	<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
	
	import { defineAsyncComponent, ref } from "vue";

	const SliderDetail = defineAsyncComponent(()=>import("./SliderDetail"));

	export default {
		name : 'ItemSlider' ,
		components : {
			SliderDetail
		},
		data(){
			return {
				items : {} ,
				loading : false ,
			}
		},
		props : {
			main_title : {
				type : String
			},
			titles : {
				type : Array
			},
			api : {
				type : String
			}
		},
		methods : {
			showFadeClass(key){
				return key==0 ? "tab-pane fade show active" :
				"tab-pane fade";
			},
			getItems(items,key){
				return Object.values(items)[key]
			},
			getData(){
				window.axios.get( this.$props.api ).then( (response) => {
					this.items=response.data
				} )
			}
		},
		async created(){
			const response = await window.axios.get(this.$props.api)
			this.items=response.data
		}

	}
</script>