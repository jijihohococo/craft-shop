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
                    @searchData="searchItems"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/item/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='item'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getItems" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="items.data"
                    request="items"
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
                                    :lengthData="items.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Subcategory</th>
                                <th>Brand</th>
                                <th>Variants</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items.data" :key="item.id">
                                <td><DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="item"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    /></td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.category_name }}</td>
                                    <td>{{ item.subcategory_name }}</td>
                                    <td>{{ item.brand_name }}</td>
                                    <td >
                                        <div >
                                        <template v-if="item.variants!==null" >
                                        <template v-for="(variant,key) in item.variants.split(',')">
                                        <router-link :to="{ name : 'item.variant' , params : { id: variant } }">
                                            <div :style="'background-color:'+item.colorCodes.split(',')[key]+';width:30px;height:30px;display:inline-block;margin-left:10px;'"></div>
                                            <!-- <input type="color" :value="item.colorCodes.split(',')[key]" disabled> -->
                                        </router-link>
                                    </template>
                                </template>
                                </div></td>
                                    <td>{{ item.deleted_at }}</td>
                                    <td class="text-left">
                                        <ViewButton :data_name="item.name" :data_model="content" :data_id="item.id" />
                                        <EditButton v-if="actions.update && item.deleted_at==null" :content="content" link="item.edit" :dataId="item.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="item.deleted_at" :deleteLink="'items/'+item.id" :restoreLink="'item_restore/'+item.id"
                                        :id="item.id" :objectData="item" @update="updateData" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                        <Pagination :page="currentPage" :lastPage="items.last_page" @getData="getItems" @searchData="searchItems" :search="search" :from="items.from" :to="items.to" :total="items.total" />
                    </div>
                </template>
            </div>
            <!-- /.card -->
        </div>
    </div>
    <!-- /.row -->
    <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
     <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Item" />
 </div>
</div>
</section>
</template>
<script >

    import Pagination from '../components/Pagination';

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
            content : 'Item',
            deleteData : [],
            multipleData : [] ,
            items : {},
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
            this.getItems( showPageNumber(this.currentPage) )
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
            deleteFromArray(this.items.data,object)
        },
        getItems(page){
            window.axios.get(makeRoute(this,page,'item') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.items=response.data.items
                   this.actions.read=true;
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchItems(page){
        window.axios.get( makeRoute(this,page,'item','search') + this.search + '&page=' + page ).then( (response) => {
            if(response.data.message=='Loading'){

                showSwalLoading(this);
            }else{
               this.items=response.data.items
               this.actions.read=true
           }
       } ).catch( (error) => {
        errorResponse(error,this,'read');
    } )
   }
},
created(){
 this.getItems(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
},
}
</script>