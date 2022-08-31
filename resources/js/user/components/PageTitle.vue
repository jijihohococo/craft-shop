<template>
	<!-- START SECTION BREADCRUMB -->
	<div class="breadcrumb_section bg_gray page-title-mini">
		<div class="container"><!-- STRART CONTAINER -->
			<div class="row align-items-center">
				<div class="col-md-6">
					<div class="page-title">
						<h1>{{ title }}</h1>
					</div>
				</div>
				<div class="col-md-6">
					<ol class="breadcrumb justify-content-md-end">
						<li class="breadcrumb-item"><router-link :to="{name: 'home' }">
							Home
						</router-link></li>
						<li class="breadcrumb-item active">{{ title }}</li>
					</ol>
				</div>
			</div>
		</div><!-- END CONTAINER-->
	</div>
	<!-- END SECTION BREADCRUMB -->
</template>
<script >
	export default {
		props : {
			title : {
				type : String
			}
		}
	}
</script>