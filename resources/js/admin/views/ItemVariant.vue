<template>
	<section class="content">
		<div class="container-fluid">
			<!-- Small boxes (Stat box) -->
			<div class="row">
				<div class="col-lg-3 col-6">
				<div class="small-box bg-info">
					<div class="inner">
						<h3>150</h3>

						<p>Today Orders</p>
					</div>
					<div class="icon">
						<i class="ion ion-bag"></i>
					</div>
					<a class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
				</div>
			</div>
			</div>
		</div>
	</section>
</template>
<script >
	import ContentHeader from '../components/File'
	import CreateEditItemVariantImage from './CreateEditItemVariantImage'
	export default {
		components: {
			ContentHeader,
			CreateEditItemVariantImage
		}
	}
</script>