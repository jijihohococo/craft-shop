<template>
	<select class="form-control" style="width:100%;" >
		<slot></slot>
	</select>
</template>
<script >
	export default {
		props: ["options", "value" , "index"],
		mounted: function() {
			var vm = this;
			$(this.$el)
            // init select2
            .select2({ data: this.options , val : this.$props.value })
            .val(this.value)
            .trigger("change")
            // emit event on change.
            .on("change", function() {
                if(vm.$props.index!==undefined){
                    vm.$emit('input',{
                        index : vm.$props.index ,
                        value : this.value
                    })
                }else{
                    vm.$emit('input',this.value )
                }
            });
        },
        watch: {
        	value: function(value) {
            // update value
            $(this.$el)
            .val(value)
            .trigger("change");
        },
        options: function(options) {
            // update options
            $(this.$el)
            .empty()
            .select2({ data: options });
        }
    },
    destroyed: function() {
    	$(this.$el)
    	.off()
    	.select2("destroy");
    }
}
</script>