<template>
	<div class="widget">
		<h5 class="widget_title">{{ title }}</h5>	
		<ul class="list_brand">
			<li v-for="data in list">
				<div class="custome-checkbox">
					<input class="form-check-input" type="checkbox" :id="data[column]" :value="data.id" v-model="selected_list" @change="changeData()">
					<label class="form-check-label" :for="data[column]">
						<span>{{ data[column] }}</span>
					</label>
				</div>
			</li>
		</ul>
	</div>
</template>
<script >
	export default {
		data(){
			return {
				selected_list: []
			}
		},
		created(){
			this.selected_list=this.$props.select_list
		},
		props : {
			column :  {
				type :  String ,
				default : 'name'
			},
			select_list : {
				type : Array
			},
			title : {
				type : String
			},
			list : {
				type : Object
			},
			route_query : {
				type : String
			}
		},
		methods : {
			changeData(){
				this.$emit( 'updatePage', this.$props.route_query , this.selected_list);
			}
		}
	}
</script>