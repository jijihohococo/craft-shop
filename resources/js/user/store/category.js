import { reactive } from 'vue'

export const categories = reactive( {
	async getCategories(){
		window.axios.get('categories').then( (response) => {
			return response.data.categories
		} )
	}
	
})