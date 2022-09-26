<template>
	<div class="lng_dropdown">
		<select v-model="userLang.data" @change="onChange($event)">
			<option
			v-for="lang in langs"
			:value="lang.val"
			:data-title="lang.title"
			>
			{{ lang.title }}
		</option>
	</select>
</div>
</template>
<script >
	import { userLang } from '../../store';
	export default {
		data(){
			return {
				userLang,
				langs : [
				{
					'val' : 'en',
					'title' : "English"
				},
				{
					'val' : 'fn',
					'title' : "France"
				},
				{
					'val' : 'jp',
					'title' : "Japanese"
				},
				{
					'val' : 'mm',
					'title' : "Myanmar"
				}
				]
			}
		},
		methods : {
			onChange(event) {
				if(event.target.value!==null){
					this.userLang.changeData(event.target.value)
				}
			}
		}
	}
</script>