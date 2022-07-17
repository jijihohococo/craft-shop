<template>
	<div id="myCarousel" class="carousel slide">
		<!-- Indicators -->
		<ol class="carousel-indicators" v-for="(banner,key) in banners">
			<li data-target="#myCarousel" :data-slide-to="key" :class="[key==0?'active':null]"></li>
		</ol>
		<div class="carousel-inner">
			<template v-for="(banner,key) in banners">
				<div :class="[ key==0 ? 'item active' : 'item'  ]">
					<img :src="'/image/banner_images/'+banner.pic" style="width:80%" class="img-responsive">
        <div class="container">
          <div class="carousel-caption">
           <h1>Bootstrap 3 Carousel</h1>

           <p>Pictures slide with overlapping words</p>
           <p><a class="btn btn-lg btn-primary" href="http://getbootstrap.com">Learn More</a>

           </p>
         </div>
       </div>
     </div>
   </template>

 </div>
 <!-- Controls --> 
 <a class="left carousel-control" href="#myCarousel" data-slide="prev">
 	<span class="icon-prev"></span>
 </a>
 <a class="right carousel-control" href="#myCarousel" data-slide="next">
 	<span class="icon-next"></span>
 </a> 
</div>
<!-- /.carousel -->
</template>
<script >
	export default {
		data(){
			return {
				banners : {}
			}
		},
		methods: {
			getBanners(){
				window.axios.get( 'get_banners' ).then( (response) => {
					this.banners=response.data.banners
				} )
			}
		},
		created(){
			this.getBanners()
		},
		mounted : function (){
			$('#myCarousel').carousel({
				interval: 3000,
				cycle: true
			});
		}
	}
</script>