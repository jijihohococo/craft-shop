export function getItemColor(responseData) {
    return responseData.item_variant.item_name + "'s " + responseData.item_variant.color_name
}
export function mergeArray(inputArray){
    let array = [];
    if(inputArray.length>0){
        Object.keys(inputArray).map((k) => {
            array.push(inputArray[k]['id'])
        } )
    }
    return array;
}

export function showPageNumber(currentPage){
    let page=currentPage-1;
    return page ==0 ? 1 : page;
}
export function checkActions(actions) {
    return actions.create==true || actions.read==true || actions.update==true || actions.delete==true;
}
export function unauthorizedActions(actions) {
 return actions.create==false && actions.read==false && actions.update==false && actions.delete==false
}
function changeWord(word){
    let lastChar=word.slice(-1)
    switch(lastChar){
        case 'y':
        return word.slice(0, -1) + 'ies';
        break;

        case 'h':
        case 'x':
        return word + 'es';
        break;

        default:
        return word + 's'
        break;

    }
}
export function makeRoute(vm,page,name,search=null) {
    vm.currentPage=page;
    switch(search){
        case null:
        vm.search=null;
        if(vm.$refs.deleteAll!==undefined){
            vm.$refs.searchModal.searchData=null;
            vm.$refs.deleteAll.$el.checked=false
        }
        let routeName=changeWord(name);
        let routeData=vm.$route.name==name ? routeName : 'trash_' + routeName;
        return routeData + '?page=';
        break;

        case 'search':
        vm.search=vm.$refs.searchModal.searchData;
        let searchRoute=vm.$route.name==name ? name + '_search' : name + '_trash_search';
        return searchRoute + '?search=';
        break;
    }
}
export function makeSelect(deleteChecks,value) {
    deleteChecks.map( (deleteCheck) => {
        deleteCheck.$el.checked=value;
        deleteCheck.$el.dispatchEvent(new Event('change'))
    } )
}
export function checkToDelete(checked,objectData,deleteArrayData,objectArrayData){
    switch(checked){
        case true:
        if(!deleteArrayData.includes(objectData.id)){
            deleteArrayData.push( objectData.id )
        }
        if(!objectArrayData.includes(objectData)){
            objectArrayData.push( objectData )
        }
        break;

        case false:
        deleteFromArray(deleteArrayData, objectData.id )
        deleteFromArray(objectArrayData,objectData)
        break;
    }
}
export function deleteMultipleData(mainArray) {
    mainArray.length=0;
}
export function deleteFromArray(array,value) {
    const index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
}

export function checkContentPermission(content,permission,object){
	window.axios.get('check_permission/'+content+'/'+permission).then( (response) => {
        if(response.data.message=='Loading'){
            showSwalLoading(object);
        }else{
            object.actions[permission]=true;
        }
    } ).catch( (error) => {
      errorResponse(error,object)
  } )
}

export function showTrashPage(route,router,pageName){
    switch(route.name){
        case pageName:
        router.push('/admin/'+pageName+'_bin');
        route.name=pageName+'_bin';
        break;

        case pageName+'_bin':
        router.push('/admin/'+pageName);
        route.name=pageName;
        break;
    }
}

export function errorResponse(error,object,action=null){
	if(error.response){
        switch(error.response.status){
            case 401:
            object.$swal( 'Unauthenticated' ,
                "You are not login" ,
                'error'  );
            setTimeout(function () {

                window.location.href="/admin/login"
            }, 2000);
            
            break;

            case 403:
            object.actions[action]=false;
            if(object.errors){
                object.errors.error_status=403;
                object.errors.error_title="Permission Denied";
                object.errors.error_description="You are not allowed to "+action+" "+object.current;
            }
            break;

            case 404:
            object.actions[action]=false;
            object.errors.error_status=404;
            object.errors.error_title="Page Not Found";
            object.errors.error_description="You are in the wrong page";
            break;

        }
    }
}

export function checkAuthorize(object,method) {
    if(object.actions[object.current]==true && object.count==0){
        object.count=1;
        if(!isNaN(object.$route.params.id)){
            object[method](object.$route.params.id);
        }
    }

}

export function checkCreateEditPermission(object){
    let checkStage=isNaN(object.$route.params.id) ? 'create' : 'update';
    checkContentPermission(object.content, checkStage ,object);
    object.current=checkStage
}

export function showSwalLoading(object) {
    object.$swal({
        title: 'Now loading',
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        onOpen: () => {
          swal.showLoading();
      }
  }).then(
  () => {},
  (dismiss) => {
      if (dismiss === 'timer') {
        object.$swal.close;
    }
} )
  location.reload();
}

export function getModel(model){
    return model[0].toLowerCase()+model.substring(1)
}