<template>
	<input class="form-check-input-lg" type="checkbox" @change="check($event)">
</template>
<script type="text/javascript">
	import { checkToDelete } from '../helpers/check.js'
	export default {
		props : {
			deleteArrayData : {
				type : Array
			},
			objectArrayData : {
				type : Array
			},
			objectData : {
				type : Object
			}
		},
		methods : {
			check($event){
				checkToDelete(
					$event,
					this.$props.objectData,
					this.$props.deleteArrayData,
					this.$props.objectArrayData)
			}
		}
	}
</script>