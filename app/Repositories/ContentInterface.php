<?php

namespace App\Repositories;


interface ContentInterface{


	public function getByContent($content,$id);

	public function searchByContent($content,$id,$searchData);

}