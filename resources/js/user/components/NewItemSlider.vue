<template>
	<div v-if="errMsg">{{ errMsg }}</div>
	<Suspense v-else>
		<template #default>
			<ItemSlider 
			:main_title="main_title"
			:titles="titles"
			:api="api"  />
		</template>
		<template #fallback>
			<div>Loading ...</div>
		</template>
	</Suspense>
</template>
<script >
	import { onErrorCaptured, ref } from "vue";
	import ItemSlider from "./ItemSlider";
	export default {
		components: {
			ItemSlider,
		},
		props : {
			main_title : {
				type : String
			},
			titles : {
				type : Array
			},
			api : {
				type : String
			}
		},
		setup() {
			const errMsg = ref(null);
			onErrorCaptured(() => {
				errMsg.value = "Something went wrong";
			});
			return {
				errMsg,
			};
		},
	};
</script>