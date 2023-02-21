<?php

namespace App\Repositories;


interface ContentInterface{


	public function getByContent($content,$link);

	public function getByCollection($link);

	public function searchByContent($content,$link,$searchData);

	public function getAll();

	public function getAllBySearch($searchData);

}