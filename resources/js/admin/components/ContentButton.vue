<template>
		<div class="col-lg-3 col-6" style="cursor: pointer;" v-on:click="clickFun(e)" >
			<div :class="'small-box '+boxClass">
				<div class="inner">
					<h3>{{ content }}</h3>
					<p>{{ subContent }}</p>
				</div>
				<div class="icon">
					<i :class="'ion '+ionClass"></i>
				</div>
				<a class="small-box-footer"></a>
			</div>
		</div>
</template>
<script >
	export default {
		name : 'ContentButton',
		props : {
			boxClass : {
				type  : String
			},
			content : {
				type : String
			},
			subContent : {
				type : String
			},
			ionClass : {
				type : String
			}
		},
		methods : {
			clickFun(val){
				this.$emit( 'clickData',val);
			}
		}
	}
</script>