<template>
	<input type="checkbox" @change="checkAll($event)">
</template>
<script >
	export default {
		props : ['deleteArrayData'],
		emits : ['selectAll','cancelAll'],
		watch : {
			deleteArrayData : {
				deep : true ,
				handler(){
					this.$el.checked=this.$props.deleteArrayData.length==3 ? true : false;
				}
			}
		},
		methods : {
			checkAll($event){
				this.$emit( $event.target.checked==true ? 'selectAll' : 'cancelAll' )
			}
		}
	}
</script>