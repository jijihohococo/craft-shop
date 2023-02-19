<template>
	<div class="main_content">
	<div class="section">
		<div class="error_wrap">
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-lg-6 col-md-10 order-lg-first">
						<div class="text-center">
							<div class="error_txt">{{ error }}</div>
							<h5 class="mb-2 mb-sm-3">oops! The page you requested was not found!</h5> 
							<p>The page you are looking for was moved, removed, renamed or might never existed.</p>
							<router-link :to="{name:'home'}" class="btn btn-fill-out">Back To Home</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script >

	import { mix } from '../common/ui'
	
	export default {
		mixins : [mix],
		data(){
			return {
				error : window.error_code ?? 404
			}
		}
	}
</script>