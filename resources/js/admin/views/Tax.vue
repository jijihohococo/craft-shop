<template>
    <ContentHeader :header="content" />
    <Loading />
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

    import Pagination from '../../components/Pagination';

    import Delete from '../components/Delete';

    import DeleteAllCheck from '../components/DeleteAllCheck';

    import ContentHeader from '../components/ContentHeader';

    import CreateButton from '../components/CreateButton';

    import EditButton from '../components/EditButton';

    import ViewButton from '../components/ViewButton';

    import Error from '../components/Error';

    import Loading from '../components/Loading';

    import DeleteCheck from '../components/DeleteCheck';

    import Trash from '../components/Trash';

    import DeleteMultiple from '../components/DeleteMultiple';

    import Search from '../components/Search';

    import { errorResponse , checkContentPermission , showSwalLoading , makeSelect , makeRoute , checkActions , deleteFromArray , unauthorizedActions , showPageNumber } from '../helpers/check.js';

    export default {
        components: {
            Search,
            Pagination,
            ContentHeader,
            Delete,
            CreateButton,
            EditButton,
            ViewButton,
            Error,
            Loading,
            DeleteCheck,
            Trash,
            DeleteMultiple,
            DeleteAllCheck
        },
        data () {
         return {
            content : 'Tax',
            deleteData : [],
            multipleData : [] ,
            taxes : {},
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
        freshPage(){
            this.getTaxes( showPageNumber(this.currentPage) )
        },
        checkAuthorizeActions(actions){
            return checkActions(actions);
        },
        checkUnauthorizeActions(actions){
            return unauthorizedActions(actions);
        },
        selectChecks(){
            if(this.$refs.deleteCheck!==undefined){
                makeSelect(this.$refs.deleteCheck,true)
            }
        },
        cancelChecks(){
            if(this.$refs.deleteCheck!==undefined){
                makeSelect(this.$refs.deleteCheck,false)
            }
        },
        updateData(object){
            deleteFromArray(this.taxes.data,object)
        },
        getTaxes(page){
            window.axios.get(makeRoute(this,page,'tax') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.taxes=response.data.taxes
                   this.actions.read=true;
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchTaxes(page){
        window.axios.get( makeRoute(this,page,'tax','search') + this.search + '&page=' + page ).then( (response) => {
           if(response.data.message=='Loading'){

            showSwalLoading(this);
        }else{
           this.taxes=response.data.taxes
           this.action.read=true
       }
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