<template>
	<input type="checkbox" @change="checkAll($event)">
</template>
<script >
	export default {
		props : ['deleteArrayData','lengthData'],
		emits : ['selectAll','cancelAll'],
		watch : {
			deleteArrayData : {
				deep : true ,
				handler(){
					this.$el.checked=this.$props.deleteArrayData.length==
					this.$props.lengthData ? true : false;
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