<template>
	<div class="lng_dropdown">
		<select v-model="selectedLang" @change="onChange($event)">
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
	export default {
		data(){
			return {
				selectedLang : '',
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
				}
				]
			}
		},
		created(){
			this.selectedLang=window.cookies.get('lang') ? window.cookies.get('lang') : 'en'
		},
		methods : {
			onChange(event) {
				if(event.target.value!==null){
					window.cookies.set("lang",event.target.value,"1D", null, null, null, "Lax");
				}
				window.location.href="/"
			}
		}
	}
</script>