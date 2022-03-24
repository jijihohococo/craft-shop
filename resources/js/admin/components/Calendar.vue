<template>
	<div id="calendar" style="width: 100%"></div>
</template>
<script >
	export default {
		mounted: function() {
			$(this.$el).datetimepicker({
				format: 'L',
				inline: true
			})
		}
	}
</script>