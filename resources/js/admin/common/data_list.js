import { checkActions , unauthorizedActions , makeSelect , deleteFromArray , showPageNumber } from '../helpers/check';

import { showSwalLoading } from  '../../helpers/general'

import { mainMixinData } from './main';

import Pagination from '../../components/Pagination';

import Delete from '../components/Delete';

import DeleteAllCheck from '../components/DeleteAllCheck';

import CreateButton from '../components/CreateButton';

import EditButton from '../components/EditButton';

import ViewButton from '../components/ViewButton';

import DeleteCheck from '../components/DeleteCheck';

import Trash from '../components/Trash';

import DeleteMultiple from '../components/DeleteMultiple';

import Search from '../components/Search';

export var mixin = {
	mixins: [mainMixinData],
    components : {
        Search,
        Pagination,
        Delete,
        CreateButton,
        EditButton,
        ViewButton,
        DeleteCheck,
        Trash,
        DeleteMultiple,
        DeleteAllCheck
    },
    data(){
      return {
       mainData : '',
       getMethod : '',
       deleteData : [],
       multipleData : [] ,
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
methods: {
    checkString(string){
        if(string==null){
            return string
        }
        let checkString=string.toLowerCase()
        let span='<span style="background-color:red">'
        let endSpan='</span>'
        if(this.search!==null){
            let search=this.search
            let lowerSearch=this.search.toLowerCase()
            if(checkString==lowerSearch ){
                return span + string.slice(0,search.length) + endSpan
            }else if(checkString.includes(lowerSearch )){
                let searchIndex=string.toLowerCase().indexOf(lowerSearch)
                let htmlString=''
                if(searchIndex==0){
                    htmlString=span + string.slice(searchIndex,search.length) + endSpan +
                    string.slice(searchIndex+search.length,
                        string.length)
                }
                else if(searchIndex+1<=string.length ){
                    htmlString= string.slice(0,searchIndex) + span +
                    string.slice(searchIndex, 
                        searchIndex+search.length
                        ) + 
                    string.slice(searchIndex+search.length,
                       search.length) + endSpan +
                    string.slice(searchIndex+search.length,
                        string.length)
                }
                return  htmlString

            }
        }
        return string
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
    freshPage(){
        var t=this
        t[this.getMethod]( showPageNumber(this.currentPage) )
    },
    updateData(object){
        var t=this
        deleteFromArray(t[this.mainData]['data'],object)
    },
    getMainData(response){
        if(response.data.message=='Loading'){

            showSwalLoading(this);
        }else{
            var t=this;
            t[this.mainData]=response.data[this.mainData]
            this.actions.read=true;
        }
    }
}
}