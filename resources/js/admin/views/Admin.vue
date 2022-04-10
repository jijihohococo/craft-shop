<template>
    <ContentHeader :header="content" />
    <Loading />
    <section class="content">
        <div class="container-fluid">
            <!-- /.row -->
            <div v-if="actions.create==true || actions.read==true || actions.update==true || actions.delete==true" class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header row">
                    <div v-if="actions.read" class="card-tools col-8 mt-1">
                        <form v-on:submit.prevent="searchAdmins(1)">
                          <div class="input-group" >
                            <input type="text" name="table_search" v-model="search" class="form-control float-right" placeholder="Search">

                            <div class="input-group-append">
                              <button type="submit" class="btn btn-default" >
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <CreateButton v-if="actions.create" :content="content" :link="'/admin/admin/create'" />
        </div>
        <!-- /.card-header -->
        <template v-if="actions.read">
            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Deleted At</th>
                      <th>Operation</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="admin in admins.data" :key="admin.id">
                  <td>{{ admin.name }}</td>
                  <td>{{ admin.email }}</td>
                  <td>{{ admin.deleted_at }}</td>
                  <td class="text-left">
                    <ViewButton :data_name="admin.name" :data_model="content" :data_id="admin.id" />
                    <EditButton v-if="actions.update && admin.deleted_at==null" :content="content" :link="'admin.edit'" :dataId="admin.id" />
                    <Delete v-if="actions.delete" :content="content" :deleteAt="admin.deleted_at" :deleteLink="'admins/'+admin.id" :restoreLink="'admin_restore/'+admin.id"
                    :id="admin.id" :objectData="admin" @update="updateData" />
                </td>
            </tr>
        </tbody>
    </table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
    <Pagination :page="currentPage" :lastPage="admins.last_page" @getData="getAdmins" @searchData="searchAdmins" :search="search" :from="admins.from" :to="admins.to" :total="admins.total" />
</div>
</template>
</div>
<!-- /.card -->
</div>
</div>
<!-- /.row -->
<div v-else-if="actions.create==false && actions.read==false && actions.update==false && actions.delete==false" class="card card-default">
   <Error :httpStatus="403" :title="'Permission Denied'" :description="'You are not allowed to do any permissions for admin'" />
</div>
</div>
</section>
</template>
<script >

    import Pagination from '../components/Pagination';

    import Delete from '../components/Delete';

    import ContentHeader from '../components/ContentHeader';

    import CreateButton from '../components/CreateButton';

    import EditButton from '../components/EditButton';

    import ViewButton from '../components/ViewButton';

    import Error from '../components/Error';

    import Loading from '../components/Loading';

    import { errorResponse , checkContentPermission , showSwalLoading } from '../helpers/check.js';

    export default {
        components: {
            Pagination,
            ContentHeader,
            Delete,
            CreateButton,
            EditButton,
            ViewButton,
            Error,
            Loading
        },
        data () {
         return {
            content : 'Admin',
            admins : {},
            search : null ,
            currentPage : 1 ,
            actions : {
                create : '' ,
                read : '' ,
                update : '' ,
                delete : ''
            }
        }
    },
    methods :{
        updateData(object,deletedTime){
            object.deleted_at=deletedTime;
        },
        getAdmins(page){
            this.currentPage=page;
            window.axios.get("admins?page=" + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.admins=response.data.admins
                   this.actions.read=true;
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchAdmins(page){
        this.currentPage=page;
        window.axios.get('admin_search?search=' + this.search + '&page=' + page ).then( (response) => {
           if(response.data.message=='Loading'){

            showSwalLoading(this);
        }else{
           this.admins=response.data.admins
           this.actions.read=true;
       }
   } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
created(){
 this.getAdmins(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
},
}
</script>