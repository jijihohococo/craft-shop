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
              <li v-if="back_link!==null" class="breadcrumb-item"><router-link :to="back_link" >{{ back_title }}</router-link></li>
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
      back_link : {
        type : String,
        default : null
      },
      back_title : {
        type : String,
        default : null
      }
    }
  }
</script>