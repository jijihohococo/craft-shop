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
                                <th>Main</th>
                                <th>Created At</th>
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
                                    <td><div v-html="checkString(currency.name)">
                                    </div></td>
                                    <td>{{ currency.main ==true ? 'Yes' : 'No' }}</td>
                                    <td><div v-html="checkString(currency.created_at)">
                                    </div></td>
                                    <td><div v-html="checkString(currency.deleted_at)">
                                    </div></td>
                                    <td class="text-left">
                                        <router-link v-if="currency.deleted_at==null" class="btn btn-success btn-sm mr-3" :to="{
                                            name : 'currency.currency_rate',
                                            params : {
                                                currency_id : currency.id
                                            }
                                        }">
                                        View Exchange Rate
                                        </router-link>
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

    import { errorResponse , checkContentPermission , makeRoute } from '../helpers/check';

    import { mixin } from '../common/data_list';

    export default {
        data () {
           return {
            content : 'Currency',
            mainData : 'currencies',
            getMethod : 'getCurrencies',
            currencies : {},
        }
    },
    mixins: [mixin],
    methods :{
        getCurrencies(page){
            window.axios.get(makeRoute(this,page,'currency') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchCurrencies(page){
        window.axios.get( makeRoute(this,page,'currency','search') + this.search + '&page=' + page ).then( (response) => {
         this.getMainData(response)
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