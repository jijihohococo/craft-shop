<template>
	
	
	<nav aria-label="Page navigation">
		<ul :class="ulClass">
			<!-- First Page & Previous -->
				<!-- <li  class="page-item">
					<a class="page-link" v-on:click="updateValue(1)"> First </a>	
				</li> -->
				<li v-if="page > 1"  class="page-item">
					<a class="page-link" aria-label="Previous" v-on:click="updateValue(page-1)" >
						<span aria-hidden="true">&laquo;</span>
						<span class="sr-only">Previous</span>
					</a>
				</li>
			<!-- First Page & Previous -->



			<!-- Show Page Numbers -->

			<template  v-if="lastPage>10 && page>=8" >
				<li class="page-item" v-for="n in 2">
					<a class="page-link" v-on:click="updateValue(n)">{{ n }}</a>
				</li>
				<li class="page-item disabled" >
					<a class="page-link">...</a>
				</li>
			</template>

			<template v-for="n in lastPage" v-if=" lastPage<=10" >
				<li v-if="n==page" class="page-item active">
					<a class="page-link">{{ n }}</a>
				</li>
				<li v-else class="page-item">
					<a class="page-link" v-on:click="updateValue(n)">{{ n }}</a>
				</li>
			</template>

			<template v-for="n in 10" v-if="page<8 && lastPage>10" >
				<li v-if="n==page" class="page-item active">
					<a class="page-link">{{ n }}</a>
				</li>
				<li v-else class="page-item">
					<a class="page-link" v-on:click="updateValue(n)">{{ n }}</a>
				</li>
			</template>

			<template v-if="page>=8 && lastPage>10" >
				<li v-for="n in [3,2,1]" class="page-item" >
					<a class="page-link" v-on:click="updateValue(page-n)">{{ page-n }}</a>
				</li>
				<li class="page-item active">
					<a class="page-link">{{ page }}</a>
				</li>
			</template>

			<template v-if="page>=8 && page+3<lastPage-1 && lastPage>10">
				<li v-for="n in [1,2,3]" class="page-item">
					<a class="page-link" v-on:click="updateValue(page+n)">{{ page+n }}</a>
				</li>
			</template>

			<template v-if="page+2==lastPage-2 && lastPage>10">
				<li v-for="n in [1,2]" class="page-item">
					<a class="page-link" v-on:click="updateValue(page+n)">{{ page+n }}</a>
				</li>
			</template>
				<li v-if="((page+1==lastPage-2) || (page+1==lastPage)) && lastPage>10" class="page-item">
					<a class="page-link" v-on:click="updateValue(page+1)">{{ page+1 }}</a>
				</li>

			<template v-if="page<lastPage-1 && lastPage>10">
				<li v-if="(lastPage-5>page)" class="page-item disabled" >
					<a class="page-link">...</a>
				</li>
				<li class="page-item">
					<a class="page-link" v-on:click="updateValue(lastPage-1)">{{ lastPage-1 }}</a>
				</li>
				<li class="page-item">
					<a class="page-link" v-on:click="updateValue(lastPage)">{{ lastPage }}</a>
				</li>
			</template>





			<!-- Last Page & Next -->
				<li v-if="lastPage>1 && page+1<=lastPage"  class="page-item">
					<a class="page-link" aria-label="Next" v-on:click="updateValue(page+1)">
						<span aria-hidden="true">&raquo;</span>
						<span class="sr-only">Next</span>
					</a>
				</li>
				<!-- <li  class="page-item"><a class="page-link" v-on:click="updateValue(lastPage)" >Last</a></li> -->
			<!-- Last Page & Next -->
		</ul>
	</nav>


</template>
<script >
export default{
	name : 'Pagination',
	emits : ['getData','searchData'],
	props : {
		ulClass : {
			type : String ,
			default : 'pagination pagination-sm pg-blue'
		},
		lastPage : {
			type : Number
		},
		page : {
			type : Number ,
			default : 1
		},
		from : {
			type : Number ,
			default : 1
		},
		to : {
			type : Number ,
		},
		total : {
			type : Number
		},
		search : {
			type : String
		}
	}, 
	methods : {
		updateValue(value){
			this.$emit( this.$props.search ? 'searchData' : 'getData',value);
			//this.$emit('getData',value);

		},
	},
}
</script>