<template>
	<img 
	:data-src="
	[ pic=='logo_dark.png' || pic==null ? '/images/logo_dark.png' : path +'/' +pic]"
	:class="class_name"
	loading="lazy"
	:alt="alt_name" 
	>
</template>
<script >
	export default {
		props : {
			path : {
				type : String
			},
			pic : {
				type : String
			},
			alt_name : {
				type : String
			},
			class_name : {
				type : String ,
				default : ''
			}
		},
		mounted : function(){
			const imgOptions = {
				threshold: 0.2
			};
			const imgObserver = new IntersectionObserver((entries, imgObserver) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					const img = entry.target;
					img.src = img.dataset.src
					imgObserver.unobserve(entry.target);
				});
			}, imgOptions);
			imgObserver.observe(this.$el)
		}
	}
</script>