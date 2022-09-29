<template>
	<div class="row">
		<div class="col-12">
			<ul class="pagination mt-3 justify-content-center pagination_style1">
				<!-- <li class="page-item active"><a class="page-link" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item"><a class="page-link" href="#"><i class="linearicons-arrow-right"></i></a></li> -->
				<li v-if="page > 1"  class="page-item">
					<a class="page-link" aria-label="Previous" v-on:click="updateValue(page-1)" >
						<i class="linearicons-arrow-left"></i>
					</a>
				</li>

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


				<li v-if="lastPage>1 && page+1<=lastPage"  class="page-item">
					<a class="page-link" aria-label="Next" v-on:click="updateValue(page+1)">
						<i class="linearicons-arrow-right"></i>
					</a>
				</li>



			</ul>
		</div>
	</div>
</template>
<script >
	export default {
		emits : ['getData','searchData'],
		props : {
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