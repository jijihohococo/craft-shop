<template>
	<Modal
	:model-value="modelValue"
	@update:modelValue="(value) => $emit('update:modelValue', value)"
	max-width="60%"
	>
	<ItemImage v-if="isLazyActivated" />
</Modal>
</template>

<script>
	import "vue-neat-modal/dist/vue-neat-modal.css";
	import { defineAsyncComponent } from "vue";
	import { Modal } from "vue-neat-modal";
	import FormLoading from "./FormLoading";

	const ItemImage = defineAsyncComponent({
		loader: () => import("./ItemImage"),
		loadingComponent: FormLoading,
	});

	export default {
		components: {
			Modal,
			ItemImage,
		},

		data: () => ({
			isLazyActivated: false,
		}),

		props: {
			modelValue: {
				type: Boolean,
				default: false,
			},
		},

		watch: {
			modelValue: {
				immediate: true,
				handler(value) {
					if (value && !this.isLazyActivated) {
						this.isLazyActivated = true;
					}
				},
			},
		},
	};
</script>