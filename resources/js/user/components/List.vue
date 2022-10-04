<template>
	<div class="widget">
		<h5 class="widget_title">{{ title }}</h5>	
		<ul class="list_brand">
			<li v-for="data in list">
				<div class="custome-checkbox">
					<input class="form-check-input" type="checkbox" name="checkbox" :id="data.name" :value="data.id" v-model="selected_list">
					<label class="form-check-label" :for="data.name">
						<span>{{ data.name }}</span>
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
		props : {
			title : {
				type : String
			},
			list : {
				type : Object
			}
		}
	}
</script>