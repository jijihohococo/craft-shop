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
                    @searchData="searchAdmins"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/admin/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='admin'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getAdmins" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="admins.data"
                    request="admins"
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
                                    :lengthData="admins.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ad in admins.data" :key="ad.id">
                                <td><DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="ad"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    /></td>
                                    <td><div v-html="checkString(ad.name)">
                                    </div></td>
                                    <td><div v-html="checkString(ad.email)">
                                    </div></td>
                                    <td><div v-html="checkString(ad.created_at)">
                                    </div></td>
                                    <td><div v-html="checkString(ad.deleted_at)">
                                    </div></td>
                                    <td class="text-left">
                                        <ViewButton :data_name="ad.name" :data_model="content" :data_id="ad.id" />
                                        <EditButton v-if="actions.update && ad.deleted_at==null" :content="content" link="admin.edit" :dataId="ad.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="ad.deleted_at" :deleteLink="'admins/'+ad.id" :restoreLink="'admin_restore/'+ad.id"
                                        :id="ad.id" :objectData="ad" @update="updateData" />
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
    <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
        <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for admin" />
 </div>
</div>
</section>
</template>
<script >

    import { errorResponse , checkContentPermission , makeRoute } from '../helpers/check';

    import { admin } from '../../store';

    import { mixin } from '../common/data_list';
    
    export default {
        mixins: [mixin],
        data () {
           return {
            admin,
            content : 'Admin',
            mainData: 'admins',
            getMethod : 'getAdmins',
            admins : {}
        }
    },
    methods :{
        getAdmins(page){
            window.axios.get(makeRoute(this,page,'admin') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchAdmins(page){
        window.axios.get(makeRoute(this,page,'admin','search') + this.search + '&page=' + page ).then( (response) => {
         this.getMainData(response)
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getAdmins(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>