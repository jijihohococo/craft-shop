<template>
	<!-- START SECTION SUBSCRIBE NEWSLETTER -->
<div class="section bg_dark small_pt small_pb">
  <div class="container"> 
      <div class="row align-items-center">  
        <div class="col-md-6">
            <div class="heading_s1 mb-md-0 heading_light">
                <h3>{{ translateLang("Subscribe") }}</h3>
            </div>
        </div>
        <div class="col-md-6">
            <div class="newsletter_form">
                <form>
                    <input type="text" required="" class="form-control rounded-0" placeholder="Enter Email Address">
                    <button type="submit" class="btn btn-fill-out rounded-0" name="submit" value="Submit">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
<!-- START SECTION SUBSCRIBE NEWSLETTER -->
<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
    import { translate } from '../../helpers/general.js'
	export default {
        methods : {
        translateLang(data){
            return  translate(data);
        }
    }
    }
</script>