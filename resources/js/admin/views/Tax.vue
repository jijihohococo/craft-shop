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
                    @searchData="searchTaxes"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/tax/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='tax'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getTaxes" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="taxes.data"
                    request="taxes"
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
                                    :lengthData="taxes.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Rate</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tax in taxes.data" :key="tax.id">
                                <td><DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="tax"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    /></td>
                                    <td>{{ tax.name }}</td>
                                    <td>{{ tax.rate }}</td>
                                    <td>{{ tax.deleted_at }}</td>
                                    <td class="text-left">
                                        <ViewButton :data_name="tax.name" :data_model="content" :data_id="tax.id" />
                                        <EditButton v-if="actions.update && tax.deleted_at==null" :content="content" link="tax.edit" :dataId="tax.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="tax.deleted_at" :deleteLink="'taxes/'+tax.id" :restoreLink="'tax_restore/'+tax.id" :id="tax.id" :objectData="tax" @update="updateData" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                        <Pagination :page="currentPage" :lastPage="taxes.last_page" @getData="getTaxes" @searchData="searchTaxes" :search="search" :from="taxes.from" :to="taxes.to" :total="taxes.total" />
                    </div>
                </template>
            </div>
            <!-- /.card -->
        </div>
    </div>
    <!-- /.row -->
    <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
     <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for tax" />
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
            content : 'Tax',
            mainData : 'taxes',
            getMethod  : 'getTaxes',
            taxes : {},
        }
    },
    mixins: [mixin],
    methods :{
        getTaxes(page){
            window.axios.get(makeRoute(this,page,'tax') + page ).then(( response ) =>  {
                this.getMainData(response)
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchTaxes(page){
        window.axios.get( makeRoute(this,page,'tax','search') + this.search + '&page=' + page ).then( (response) => {
           this.getMainData(response)
   } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
 this.getTaxes(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
},
}
</script>