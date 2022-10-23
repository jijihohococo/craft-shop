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
                    @searchData="searchCurrencies"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/currency/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='currency'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getCurrencies" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="currencies.data"
                    request="currencies"
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
                                    :lengthData="currencies.data.length"
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
                            <tr v-for="currency in currencies.data" :key="currency.id">
                                <td><DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="currency"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    /></td>
                                    <td>{{ currency.name }}</td>
                                    <td>{{ currency.price }}</td>
                                    <td>{{ currency.deleted_at }}</td>
                                    <td class="text-left">
                                        <ViewButton :data_name="currency.name" :data_model="content" :data_id="currency.id" />
                                        <EditButton v-if="actions.update && currency.deleted_at==null" :content="content" link="currency.edit" :dataId="currency.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="currency.deleted_at" :deleteLink="'currencies/'+currency.id" :restoreLink="'currency_restore/'+currency.id" :id="currency.id" :objectData="currency" @update="updateData" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                        <Pagination :page="currentPage" :lastPage="currencies.last_page" @getData="getCurrencies" @searchData="searchCurrencies" :search="search" :from="currencies.from" :to="currencies.to" :total="currencies.total" />
                    </div>
                </template>
            </div>
            <!-- /.card -->
        </div>
    </div>
    <!-- /.row -->
    <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
       <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Currency" />
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

    import DeleteCheck from '../components/DeleteCheck';

    import Trash from '../components/Trash';

    import DeleteMultiple from '../components/DeleteMultiple';

    import Search from '../components/Search';

    import { errorResponse , checkContentPermission , makeSelect , makeRoute , checkActions , deleteFromArray , unauthorizedActions , showPageNumber } from '../helpers/check';

    import { showSwalLoading } from  '../../helpers/general'

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
            DeleteCheck,
            Trash,
            DeleteMultiple,
            DeleteAllCheck
        },
        data () {
           return {
            content : 'Currency',
            deleteData : [],
            multipleData : [] ,
            currencies : {},
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
            this.getCurrencies( showPageNumber(this.currentPage) )
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
            deleteFromArray(this.currencies.data,object)
        },
        getCurrencies(page){
            window.axios.get(makeRoute(this,page,'currency') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                 this.currencies=response.data.currencies
                 this.actions.read=true;
             }
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchCurrencies(page){
        window.axios.get( makeRoute(this,page,'currency','search') + this.search + '&page=' + page ).then( (response) => {
         if(response.data.message=='Loading'){

            showSwalLoading(this);
        }else{
         this.currencies=response.data.currencies
         this.action.read=true
     }
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getCurrencies(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>