<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CustomerService;
class CustomerServiceController extends CommonController
{

    public $model = 'CustomerService';

    public $content = 'customer_services';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            CustomerService::latest('id')
            ->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            CustomerService::onlyTrashed()
            ->latest('id')
            ->paginate(10)
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    private function uploadPic($request,$customerService,$oldFile=NULL){
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'customer_service_images',
            'old_file'=> $oldFile , 
            'width'  => 138 , 
            'height' => 80 ],$request,$customerService );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate($this->validateData());
        $customerService=new CustomerService($request->except(['chat_available']) );
        $this->uploadPic($request,$customerService);
        $customerService->save( $customerService->getAttributes() );
        return response()->json([
            'message' => $customerService->name . ' Customer Service is created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(CustomerService $customerService)
    {
        //
        return response()->json([
            'customer_service' => $customerService
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomerService $customerService)
    {
        //
        $request->validate($this->validateData($customerService->id));
        $newCustomerService=new CustomerService($request->except(['chat_available']));
        $this->uploadPic($request,$newCustomerService,$customerService->pic);
        $customerService->update($newCustomerService->getAttributes());
        return response()->json([
            'message' => $request->name . ' Customer Service is updated successfully'
        ]);
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(CustomerService::searchWithName($searchData)
            ->searchWithEmail($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10));
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            CustomerService::onlyTrashed()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->searchWithEmail($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10) );
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id) ,
            'email' => ['required', 'email' , 'max:100', $id==null ? 'unique:'.$this->content : 'unique:'.$this->content.',email,'.$id ],
            'password' => ['nullable', 'string', 'min:8', 'confirmed'],
            'pic' => $id==null ? requiredImage() : nullableImage()
        ];
    }
}
