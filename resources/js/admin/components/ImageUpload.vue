<template>
	<div class="col-lg-3 col-6 item-image" style="cursor: pointer;"
	@click="isFormVisible = true">
	<div class="small-box bg-warning">
		<div class="inner">
			<h3>Images</h3>

			<p>Upload</p>
		</div>
		<div class="icon">
			<i class="ion ion-android-image"></i>
		</div>
		<a class="small-box-footer"></a>
	</div>
</div>
<ItemImageDialog v-model="isFormVisible" />
</template>
<script >
	import ItemImageDialog from "./ItemImageDialog";

	export default {
		components: {
			ItemImageDialog,
		},
		data: () => ({
			isFormVisible: false,
		}),
	};
</script>