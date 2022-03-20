<template>
	<input type="file" name="multiple" >
</template>
<script >

	import { errorResponse } from '../helpers/check.js';

	export default {
		data(){
			return {
				array : [] ,
				picArray : [] ,
				actions : {
					delete : ''
				}
			}
		},
		props : {
			pics : {
				type : Array
			},
			multiple : {
				type : Boolean ,
				default : false
			},
			storage_path : {
				type : String ,
				default : ''
			},
			delete_path : {
				type : String ,
				default : ''
			},
			delete_all_path  : {
				type : String ,
				default : ''
			}
		},
		watch : {
			pics : {
				deep : true ,
				handler(){
					let vm=this;
					let pics=this.$props.pics;
					let currentPath=window.location.pathname.substring(1)
					if(pics.length>0){
						pics.map( function(pic) {
							let picName=window.location.href.replace(currentPath,vm.$props.storage_path+pic.filename );
							vm.picArray.push(picName);
							vm.array.push({
								'caption' : pic.filename ,
								'width' : '35px',
								'url' : window.location.href.replace(currentPath,vm.$props.delete_path+pic.id  )
								,
								'key' : pic.id ,
								'downloadURL' : picName,
								'type' : vm.checkExtension(pic.filename)
							})
						} )
					}

						$(vm.$el).fileinput({
							initialPreview: vm.picArray,
							initialPreviewAsData: true,
							initialPreviewConfig : vm.array ,
							theme: 'fa',
							overwriteInitial: vm.$props.multiple==true ? false : true ,
							maxFileSize:22048,
							maxFilesNum: 10,
							allowedFileExtensions: ["jpg", "gif", "png", "jpeg","webp"] ,
						})

						$(vm.$el).on('fileclear',function(){
							if(vm.array.length>0){
								$(vm.$el).fileinput('refresh',{
									initialPreview: [],
									initialPreviewAsData: true,
									initialPreviewConfig : [] ,
									theme: 'fa',
									overwriteInitial: true ,
									maxFileSize:22048,
									maxFilesNum: 10,
									allowedFileExtensions: ["jpg", "gif", "png", "jpeg","webp"] ,
								})
								window.axios.delete(vm.$props.delete_all_path+vm.$route.params.id).then((response)=>{
									console.log(response.data.message)
								}).catch( (error) => {
									errorResponse(error,this,'delete')
								} )
							}
							vm.array=[];
							vm.picArray=[];
							vm.$emit('removed');
						})
				}
			}
		},
		methods : {
			checkExtension(data){
				switch (data.substring(data.lastIndexOf(".")+1)) {
					case "pdf":
					return "pdf";
					break;

					case "jpg":
					case "jpeg":
					case "png":
					case "webp":
					case "gif":
					return "image";
					break;

					case "webm":
					case "mkv":
					case "flv":
					case "vob":
					case "ogv":
					case "ogg":
					case "drc":
					case "gif":
					case "gifv":
					case "mng":
					case "avi":
					case "MTS":
					case "M2TS":
					case "mov":
					case "qt":
					case "wmv":
					return "movie";
					break;

					default:
					return "object";
					break;
				}
			}
		},
		mounted : function (){
			var vm=this;
			if(this.$props.multiple){
				$(vm.$el).attr('multiple', true);
			}
			if(isNaN(vm.$route.params.id)){
				$(vm.$el)
				.fileinput({
					initialPreviewAsData: true,
					theme: 'fa',
					overwriteInitial: true,
					maxFileSize:22048,
					maxFilesNum: 10,
					allowedFileExtensions: ["jpg", "gif", "png", "jpeg","webp"]
				})
			}
		},
	}
</script>