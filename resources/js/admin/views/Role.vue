<template>
    <ContentHeader :header="content" />
    <section class="content">
        <div class="container-fluid">
            <!-- /.row -->
            <div v-if="checkAuthorizeActions(actions)" class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header row">
                    <Search 
                    :read="actions.read"
                    ref="searchModal"
                    @searchData="searchRoles"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/role/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='role'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getRoles" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="roles.data"
                    request="roles"
                    @freshData="freshPage" />
                </div>
                <!-- /.card-header -->
                <template v-if="actions.read">
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                          <thead>
                            <tr>
                                <th>
                                    <DeleteAllCheck
                                    v-if="actions.delete"
                                    :deleteArrayData="deleteData"
                                    @selectAll="selectChecks"
                                    @cancelAll="cancelChecks"
                                    :lengthData="roles.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="role in roles.data" :key="role.id">
                                <td><DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="role"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    /></td>
                                    <td>{{ role.name }}</td>
                                    <td>{{ role.deleted_at }}</td>
                                    <td class="text-left">
                                        <ViewButton :data_name="role.name" :data_model="content" :data_id="role.id" />
                                        <EditButton v-if="actions.update && role.deleted_at==null" :content="content" link="role.edit" :dataId="role.id" />
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
    <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
       <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Role" />
   </div>
</div>
</section>
</template>
<script >

    import { errorResponse , checkContentPermission , makeRoute , showPageNumber } from '../helpers/check';

    import { mixin } from '../common/data_list';

    export default {
        data () {
           return {
            content : 'Role',
            mainData : 'roles',
            getMethod  : 'getRoles',
            roles : {}
        }
    },
    mixins: [mixin],
    methods :{
        getRoles(page){
            window.axios.get(makeRoute(this,page,'role') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchRoles(page){
        window.axios.get(makeRoute(this,page,'role','search') + this.search + '&page=' + page ).then( (response) => {
            this.getMainData(response)
     } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
 }
},
mounted : function(){
   this.getRoles(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
}
}
</script>