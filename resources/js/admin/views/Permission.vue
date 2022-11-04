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
                    @searchData="searchPermissions"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/permission/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='permission'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getPermissions" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="permissions.data"
                    request="permissions"
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
                                    :lengthData="permissions.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Content</th>
                                <th>Access</th>
                                <th>Created At</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="permission in permissions.data" :key="permission.id">
                                <td><DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="permission"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    /></td>
                                    <td><div v-html="checkString(permission.name)">
                                    </div></td>
                                    <td><div v-html="checkString(permission.model)">
                                    </div></td>
                                    <td>
                                     <template v-for="access in ['create','update','read','delete']">
                                       <template v-if="permission[access]==true" >
                                        <span v-html="checkString(access)"></span>,
                                    </template>
                                </template>
                            </td>
                            <td><div v-html="checkString(permission.created_at)"></div></td>
                            <td><div v-html="checkString(permission.deleted_at)"></div></td>
                            <td class="text-left">
                                <ViewButton :data_name="permission.name" :data_model="content" :data_id="permission.id" />
                                <EditButton v-if="actions.update && permission.deleted_at==null" :content="content" link="permission.edit" :dataId="permission.id" />

                                <Delete v-if="actions.delete" :content="content" :deleteAt="permission.deleted_at" :deleteLink="'permissions/'+permission.id" :restoreLink="'permission_restore/'+permission.id" :id="permission.id" :objectData="permission" @update="updateData" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
            <div class="card-footer clearfix">
                <Pagination :page="currentPage" :lastPage="permissions.last_page"  @getData="getPermissions" @searchData="searchPermissions" :search="search" :from="permissions.from" :to="permissions.to" :total="permissions.total" />
            </div>
        </template>
    </div>
    <!-- /.card -->
</div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
   <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Permission" />
</div>
</div>
</section>
</template>
<script >

    import { errorResponse , checkContentPermission , makeRoute } from '../helpers/check';

    import { mixin } from '../common/data_list';

    export default {
        data () {
         return {
            content : 'Permission',
            mainData  : 'permissions',
            getMethod : 'getPermissions',
            permissions : {},
        }
    },
    mixins: [mixin],
    methods :{
        getPermissions(page){
            window.axios.get(makeRoute(this,page,'permission') + page ).then(( response ) =>  {
                this.getMainData(response)
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchPermissions(page){
        window.axios.get(makeRoute(this,page,'permission','search') + this.search + '&page=' + page ).then( (response) => {
            this.getMainData(response)
       } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
   }
},
mounted : function(){
 this.getPermissions(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
}
}
</script>