<?php
namespace App\Traits;

trait Review
{
	public $model , $column , $itemId;

	public function calculateReview($model,$column,$itemId){

		$this->model=$model;
		$this->column=$column;
		$this->itemId=$itemId;

		$countItemRate=$this->itemRateQuery()->count();

		if($countItemRate==0){
			return [
				'averageStarPercent' => 0 ,
				'averageStarData' => 0,
				'oneStarPercent' =>  0, 
				'twoStarPercent' =>  0,
				'threeStarPercent' =>  0,
				'fourStarPercent'  =>  0,
				'fiveStarPercent' =>  0, 
				'oneStarCount' =>   0,  
				'twoStarCount' =>  0, 
				'threeStarCount' =>  0, 
				'fourStarCount' =>   0 , 
				'fiveStarCount' =>  0, 
				'countItemRate' => 0
			];
		}

		$oneStarCount=$this->countStarRate(1);
		$twoStarCount=$this->countStarRate(2);
		$threeStarCount=$this->countStarRate(3);
		$fourStarCount=$this->countStarRate(4);
		$fiveStarCount=$this->countStarRate(5);



		$oneStarPercent=$oneStarCount>0 ? ($oneStarCount /$countItemRate)*100 : 0;
		$twoStarPercent=$twoStarCount > 0 ? ($twoStarCount /$countItemRate)*100 : 0;
		$threeStarPercent=$threeStarCount > 0 ? ($threeStarCount /$countItemRate)*100 : 0;
		$fourStarPercent=$fourStarCount > 0 ? ($fourStarCount /$countItemRate)*100 : 0;
		$fiveStarPercent=$fiveStarCount > 0 ? ($fiveStarCount /$countItemRate)*100 : 0;

		

		$averageStarData= ($oneStarPercent!==0 || $twoStarPercent!==0 || $threeStarPercent!==0 || $fourStarPercent!==0 || $fiveStarPercent!==0 ) ? (5*$fiveStarCount + 4*$fourStarCount + 3*$threeStarCount + 2*$twoStarCount + 1*$oneStarCount)/($fiveStarCount+$fourStarCount+$threeStarCount+$twoStarCount+$oneStarCount) : 0 ;

		$averageStarPercent=starPercentage($averageStarData);

		return [
			'averageStarPercent' => $averageStarPercent ,
			'averageStarData' => round($averageStarData,1),
			'oneStarPercent' => $oneStarPercent , 
			'twoStarPercent' => $twoStarPercent ,
			'threeStarPercent' => $threeStarPercent ,
			'fourStarPercent'  => $fourStarPercent ,
			'fiveStarPercent' => $fiveStarPercent , 
			'oneStarCount' => $oneStarCount  ,  
			'twoStarCount' => $twoStarCount , 
			'threeStarCount' => $threeStarCount , 
			'fourStarCount' =>  $fourStarCount  , 
			'fiveStarCount' => $fiveStarCount , 
			'countItemRate' => $countItemRate
		];
	}

	public function itemRateQuery(){
		return $this->model::where($this->column,$this->itemId); 
	}

	public function countStarRate($rate){

		return $this->itemRateQuery()->where('rate', $rate )->count();

	}   

}