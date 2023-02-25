<template>
	<div class="rating_wrap">
			<div class="rating">
				<div class="product_rate"
				:style="{ 'width': review_percent }"
				></div>
			</div>
			<span class="rating_num">{{ reviews }}</span>
		</div>
</template>
<script >
	export default {
		props : ['reviews','review_percent'],
	}
</script>