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
                        <form v-on:submit.prevent="searchRoles(1)">
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
            <CreateButton v-if="actions.create" :content="content" :link="'/admin/role/create'" />
        </div>
        <!-- /.card-header -->
        <template v-if="actions.read">
            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Deleted At</th>
                      <th>Operation</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="role in roles.data" :key="role.id">
                  <td>{{ role.name }}</td>
                  <td>{{ role.deleted_at }}</td>
                  <td class="text-left">
                    <EditButton v-if="actions.update && role.deleted_at==null" :content="content" :link="'role.edit'" :dataId="role.id" />
                    <Delete v-if="actions.delete" :content="content" :deleteAt="role.deleted_at" :deleteLink="'roles/'+role.id" :restoreLink="'role_restore/'+role.id" :id="role.id" :objectData="role" @update="updateData"  />
                </td>
            </tr>
        </tbody>
    </table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
    <Pagination :page="currentPage" :lastPage="roles.last_page"  @getData="getRoles" @searchData="searchRoles" :search="search" :from="roles.from" :to="roles.to" :total="roles.total" />
</div>
</template>
</div>
<!-- /.card -->
</div>
</div>
<!-- /.row -->
<div v-else-if="actions.create==false && actions.read==false && actions.update==false && actions.delete==false" class="card card-default">
 <Error :httpStatus="403" :title="'Permission Denied'" :description="'You are not allowed to do any permissions for Role'" />
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
            Error,
            Loading
        },
        data () {
         return {
            content : 'Role',
            roles : {},
            search : null ,
            currentPage : 1,
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
        getRoles(page){
            this.currentPage=page;
            window.axios.get("roles?page=" + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.roles=response.data.roles
                   this.actions.read=true
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchRoles(page){
        this.currentPage=page;
        window.axios.get('role_search?search=' + this.search + '&page=' + page ).then( (response) => {
            if(response.data.message=='Loading'){

                showSwalLoading(this);
            }else{
               this.roles=response.data.roles
               this.actions.read=true
           }
       } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
   }
},
created(){
 this.getRoles(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
}
}
</script>