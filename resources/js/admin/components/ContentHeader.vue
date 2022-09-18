<template>
	<!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">{{ header }}</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/admin/dashboard">Home</router-link></li>
              <li v-for="link in back_links" class="breadcrumb-item">
                <router-link :to="link.route" >{{ link.title }}</router-link>
              </li>
              <li v-if="header!=='Dashboard'" class="breadcrumb-item active">{{ header }}</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
</template>
<script >
  export default {
    name : 'ContentHeader',
    props : {
      header : {
        type : String
      },
      back_links : {
        type : Array
      }
    }
  }
</script>