<template>
  <div v-if="read" class="card-tools col-8 mt-1">
    <form v-on:submit.prevent="searchFunc(1)">
      <div class="input-group" >
        <input type="text" name="table_search" v-model="searchData" class="form-control float-right" placeholder="Search">

        <div class="input-group-append">
          <button type="submit" class="btn btn-default" >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script >
  export default {
    props : ['read'],
    emits : ['searchData'],
    data () {
     return {
      searchData : null
    }
  },
  methods : {
    searchFunc(){
      this.$emit( 'searchData' , 1 )
    }
  }
}
</script>