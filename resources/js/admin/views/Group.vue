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
                        <form v-on:submit.prevent="searchGroups(1)">
                          <div class="input-group" >
                            <input type="text" name="table_search" v-model="search" class="form-control float-right" placeholder="Search">

                            <div class="input-group-append">
                              <button type="submit" class="btn btn-default" v-on:click="searchGroups(1)">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <CreateButton v-if="actions.create" :content="content" :link="'/admin/group/create'" />
        </div>
        <!-- /.card-header -->
        <template v-if="actions.read">
            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Color</th>
                      <th>Deleted At</th>
                      <th>Operation</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="group in groups.data" :key="group.id">
                  <td>{{ group.name }}</td>
                  <td><input type="color" :value="group.color_code" disabled></td>
                  <td>{{ group.deleted_at }}</td>
                  <td class="text-left">
                    <ViewButton :data_name="group.name" :data_model="content" :data_id="group.id" />
                    <EditButton v-if="actions.update && actions.deleted_at==null" :content="content" :link="'group.edit'" :dataId="group.id" />
                    <Delete v-if="actions.delete" :content="content" :deleteAt="group.deleted_at" :deleteLink="'groups/'+group.id" :restoreLink="'group_restore/'+group.id" :id="group.id" :objectData="group" @update="updateData" />
                </td>
            </tr>
        </tbody>
    </table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
    <Pagination :page="currentPage" :lastPage="groups.last_page" @getData="getGroups" @searchData="searchGroups" :search="search" :from="groups.from" :to="groups.to" :total="groups.total" />
</div>
</template>
</div>
<!-- /.card -->
</div>
</div>
<!-- /.row -->
<div v-else-if="actions.create==false && actions.read==false && actions.update==false && actions.delete==false" class="card card-default">
   <Error :httpStatus="403" :title="'Permission Denied'" :description="'You are not allowed to do any permissions for Group'" />
</div>
</div>
</section>
</template>
<script >

    import Pagination from '../components/Pagination';

    import ContentHeader from '../components/ContentHeader';

    import Delete from '../components/Delete';

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
            content : 'Group',
            groups : {},
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
        getGroups(page){
            this.currentPage=page;
            window.axios.get("groups?page=" + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.groups=response.data.groups
                   this.actions.read=true
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchGroups(page){
        this.currentPage=page;
        window.axios.get('group_search?search=' + this.search + '&page=' + page ).then( (response) => {
            if(response.data.message=='Loading'){

                showSwalLoading(this);
            }else{
               this.groups=response.data.groups
               this.actions.read=true
           }
       } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
   }
},
created(){
 this.getGroups(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
}
}
</script>