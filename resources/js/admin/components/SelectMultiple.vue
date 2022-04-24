<template>
	<select class="select2" multiple="multiple" data-placeholder="Select Permissions" data-dropdown-css-class="select2-purple" style="width: 100%;">
		<slot></slot>
	</select>
</template>
<script >
	export default{
		props: ['options', 'value' , 'index'],
		mounted(){
			var self = this;
			$(this.$el)
			.select2({ theme: 'bootstrap4' , data: this.options})
			.val(this.value)
			.trigger('change')
			.on('change', function () {
                    //self.$emit('input', this.value) //single select worked good
                    //self.$emit('input',  $(this).val()) // multiple select
                    self.$emit('input', self.$props.index!==null ? {
                        index : self.$props.index ,
                        value : $(this).val()
                    } : $(this).val() )
                })
		},
		watch: {
			value: function (value) {
				if ([...value].sort().join(",") !== [...$(this.$el).val()].sort().join(","))
					$(this.$el).val(value).trigger('change');
			},
			options: function (options) {
				$(this.$el).select2({ data: options })
			}
		},
		destroyed: function () {
			$(this.$el).off().select2('destroy')
		}
	}
</script>