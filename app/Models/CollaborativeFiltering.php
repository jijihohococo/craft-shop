<?php

namespace App\Models;

use DB;
class CollaborativeFiltering{

	
	public function filter($arrayData){
		$arrayData=DB::table('item_reviews')
		->select(DB::raw('user_id ,
			GROUP_CONCAT(rate) AS rates,
			GROUP_CONCAT(item_id) AS review_items,
			(SELECT GROUP_CONCAT(id) FROM items) AS items'
		))
		->groupBy('user_id')
		->get();
		$resultArray=[];
		$itemReviews=[];
		foreach($arrayData as $item){
			$items=explode(',', $item->review_items);
			$rates=explode(',',$item->rates);
			$itemRates=array_combine($items, $rates);
			$allItems=explode(',',$item->items);
			
			$newItems=array_values(array_diff($allItems,$items));

			if(!empty($newItems) ){
				$newRates=array_pad([], count($newItems), '0');
				$newItemRates=array_combine($newItems,$newRates);
				$itemRates=$itemRates+$newItemRates;
			}
			$max=(int)max($itemRates);
			$min=(int)min($itemRates);
			$dd=$max-$min;
		 	//$mean=mean($itemRates);


			foreach($itemRates as $key => $rate){
		 		//$rate=(int)$rate;
		 		//$newMean=$rate-$mean;
		 		//$this->resultArray[$item->user_id][$key]=$dd== 0 ? $newMean : $newMean / $dd;
				$rate=(int)$rate;
				$resultArray[$item->user_id][$key]=$rate;
				$itemReviews[$key][]=$rate;
			}
		}
		$consineSimilarities=[];
		
		foreach ($itemReviews as $i => $xValue) {
			$newItemReviews=$itemReviews;
			unset($newItemReviews[$i]);
			foreach($newItemReviews as $j => $yValue){
				$consineSimilarities[$i][$j]=cosineSimilarity($xValue,$yValue);
			}
		}
		return $consineSimilarities;

	}
}