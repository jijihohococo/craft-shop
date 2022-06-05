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
                    @searchData="searchBanners"
                    />
                    <CreateButton v-if="actions.create" :content="content" :link="'/admin/banner/create'" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='banner'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getBanners" />
                    <DeleteMultiple 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    request="banners" />
                </div>
                <!-- /.card-header -->
                <template v-if="actions.read">
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                          <thead>
                            <tr>
                                <th>
                                    <DeleteAllCheck
                                    :deleteArrayData="deleteData"
                                    @selectAll="selectChecks"
                                    @cancelAll="cancelChecks"
                                    :lengthData="banners.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Title</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="banner in banners.data" :key="banner.id">
                                <td>
                                    <DeleteCheck :objectData="category"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    />
                                </td>
                                <td>{{ banner.title }}</td>
                                <td>{{ banner.deleted_at }}</td>
                                <td class="text-left">
                                    <ViewButton :data_name="banner.title" :data_model="content" :data_id="banner.id" />
                                    <EditButton v-if="actions.update && banner.deleted_at==null" :content="content" :link="'banner.edit'" :dataId="banner.id" />
                                    <Delete v-if="actions.delete" :content="content" :deleteAt="banner.deleted_at" :deleteLink="'banners/'+banner.id" :restoreLink="'banner_restore/'+banner.id" :id="banner.id" :objectData="banner" @update="updateData" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="banners.last_page" @getData="getBanners" @searchData="searchBanners" :search="search" :from="banners.from" :to="banners.to" :total="banners.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="actions.create==false && actions.read==false && actions.update==false && actions.delete==false" class="card card-default">
 <Error :httpStatus="403" :title="'Permission Denied'" :description="'You are not allowed to do any permissions for Banner'" />
</div>
</div>
</section>
</template>
<script >

    import Pagination from '../components/Pagination';

    import ContentHeader from '../components/ContentHeader';

    import CreateButton from '../components/CreateButton';

    import EditButton from '../components/EditButton';

    import ViewButton from '../components/ViewButton';

    import Delete from '../components/Delete';

    import Error from '../components/Error';

    import Loading from '../components/Loading';

    import { errorResponse , checkContentPermission , showSwalLoading , makeSelect , makeRoute , checkActions } from '../helpers/check.js';

    export default {
        components: {
            Pagination,
            ContentHeader,
            CreateButton,
            EditButton,
            ViewButton,
            Delete,
            Error,
            Loading
        },
        data () {
           return {
            content : 'Banner' ,
            deleteData : [],
            multipleData : [] ,
            banners : {},
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
        checkAuthorizeActions(actions){
            return checkActions(actions);
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
        updateData(object,deletedTime){
            object.deleted_at=deletedTime;
        },
        getBanners(page){
            this.currentPage=page;
            window.axios.get("banners?page=" + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.banners=response.data.banners
                   this.actions.read=true;
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchBanners(page){
        this.currentPage=page;
        window.axios.get('banner_search?search=' + this.search + '&page=' + page ).then( (response) => {
            if(response.data.message=='Loading'){

                showSwalLoading(this);
            }else{
             this.banners=response.data.banners
             this.actions.read=true;
         }
     } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
 }
},
created(){
   this.getBanners(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
}
}
</script>