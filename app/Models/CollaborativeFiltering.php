<?php

namespace App\Models;
abstract class CollaborativeFiltering{

	private $acceptLimit = 0.5;

	public function filter($arrayData,$column,$keyColumn){
		if(empty($arrayData)){
			return [];
		}
		$resultArray=[];
		$itemReviews=[];
		foreach($arrayData as $item){
			$items=explode(',', $item->review_items);
			$rates=explode(',',$item->{$column} );
			$itemRates=array_combine($items, $rates);
			$allItems=explode(',',$item->items);
			
			$newItems=array_values(array_diff($allItems,$items));

			if(!empty($newItems) ){
				$newRates=array_pad([], count($newItems), '0');
				$newItemRates=array_combine($newItems,$newRates);
				$itemRates=$itemRates+$newItemRates;
			}
			//$max=(int)max($itemRates);
			//$min=(int)min($itemRates);
			//$dd=$max-$min;
		 	//$mean=mean($itemRates);


			foreach($itemRates as $key => $rate){
		 		//$rate=(int)$rate;
		 		//$newMean=$rate-$mean;
		 		//$this->resultArray[$item->user_id][$key]=$dd== 0 ? $newMean : $newMean / $dd;
				$rate=(int)$rate;
				$resultArray[$item->{$keyColumn} ][$key]=$rate;
				$itemReviews[$key][]=$rate;
			}
		}
		//dd($itemReviews);
		$consineSimilarities=[];
		//dd($itemReviews);
		foreach ($itemReviews as $i => $xValue) {
			$newItemReviews=$itemReviews;
			unset($newItemReviews[$i]);
			foreach($newItemReviews as $j => $yValue){
				$consineSimilarities[$i][$j]=isset($consineSimilarities[$j][$i]) ?
				$consineSimilarities[$j][$i] :
				cosineSimilarity($xValue,$yValue);
			}
		}
		return $consineSimilarities;

	}

}