<template>
	<div class="error-page">
					<h2 class="headline text-warning">404</h2>

					<div class="error-content">
						<h3><i class="fas fa-exclamation-triangle text-warning"></i>{{ title }}</h3>

						<p>
						{{ description }}
						</p>
					</div>
					<!-- /.error-content -->
				</div>
</template>
<script >
	export default {
		props : {
			httpStatus : {
				type : Number
			},
			title  : {
				type : String
			},
			description : {
				type : String
			}
		}
	}
</script>