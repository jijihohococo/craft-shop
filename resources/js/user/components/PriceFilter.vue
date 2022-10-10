<template>
	<div class="filter_price">
		<div id="price_filter"
		:data-min="min_val" 
		:data-max="max_val" 
		:data-min-value="min_val"
		:data-max-value="max_val" data-price-sign=""></div>
		<div class="price_range">
			<span>Price:<span id="flt_price"></span></span>
			<input type="hidden" id="price_first">
			<input type="hidden" id="price_second">
		</div>
	</div>
</template>
<script >
	export default {
		props : ['max_val','min_val'],
		mounted : function(){
		var $filter_selector = $('#price_filter');
		var a = $filter_selector.data("min-value");
		var b = $filter_selector.data("max-value");
		var c = $filter_selector.data("price-sign");
		$filter_selector.slider({
			range: true,
			min: $filter_selector.data("min"),
			max: $filter_selector.data("max"),
			values: [ a, b ],
			slide: function( event, ui ) {
				$( "#flt_price" ).html( c + ui.values[ 0 ] + " - " + c + ui.values[ 1 ] );
				$( "#price_first" ).val(ui.values[ 0 ]);
				$( "#price_second" ).val(ui.values[ 1 ]);
			}
		});
		$( "#flt_price" ).html( c + $filter_selector.slider( "values", 0 ) + " - " + c + $filter_selector.slider( "values", 1 ) );
		}
	}
</script>