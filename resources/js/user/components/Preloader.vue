<template>
	<div class="preloader">
    <div class="lds-ellipsis">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div> 
</template>
<script>
  export default {
    data: () => {
      return {
        isloaded: false
      }
    },
    mounted() {
     window.addEventListener('load', () => {
     setTimeout(() => {
      $(this.$el).delay(100).fadeOut(700).addClass('loaded');
    }, 2500)
   })
   },
 }
</script>