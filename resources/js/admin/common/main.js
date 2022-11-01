import ContentHeader from '../components/ContentHeader';

import Error from '../components/Error';

export var mainMixinData={
	components: {
		ContentHeader,
		Error
	},
	methods: {
		checkString(string){
			if(string==null || string.trim().length === 0 ){
				return string
			}
			let checkString=string.toLowerCase()
			let span='<span class="text-primary">'
			let endSpan='</span>'
			if(this.search!==null){
				let search=this.search
				let lowerSearch=this.search.toLowerCase()
				if(checkString==lowerSearch ){
					return span + string.slice(0,search.length) + endSpan
				}else if(checkString.includes(lowerSearch )){
					let searchIndex=string.toLowerCase().indexOf(lowerSearch)
					let htmlString=''
					if(searchIndex==0){
						htmlString=span + string.slice(searchIndex,search.length) + endSpan +
						string.slice(searchIndex+search.length,
							string.length)
					}
					else if(searchIndex+1<=string.length ){
						htmlString= string.slice(0,searchIndex) + span +
						string.slice(searchIndex, 
							searchIndex+search.length
							) + 
						string.slice(searchIndex+search.length,
							search.length) + endSpan +
						string.slice(searchIndex+search.length,
							string.length)
					}
					return  htmlString

				}
			}
			return string
		},
	}
}