<template>
	<div class="card bg-gradient-success">
		<div class="card-header border-0">

			<h3 class="card-title">
				<i class="far fa-calendar-alt"></i>
				Calendar
			</h3>
			<!-- tools card -->
			<div class="card-tools">
				<!-- button with a dropdown -->

				<button type="button" class="btn btn-success btn-sm" data-card-widget="collapse">
					<i class="fas fa-minus"></i>
				</button>
				<button type="button" class="btn btn-success btn-sm" data-card-widget="remove">
					<i class="fas fa-times"></i>
				</button>
			</div>
			<!-- /. tools -->
		</div>
		<!-- /.card-header -->
		<div class="card-body pt-0">
			<!--The calendar -->
			<!-- <div id="calendar" style="width: 100%"></div> -->
			<Calendar />
		</div>
		<!-- /.card-body -->
	</div>
</template>
<script >
	import Calendar from './Calendar';
	export default {
		components : {
			Calendar
		}
	}
</script>
