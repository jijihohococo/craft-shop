<?php
namespace App\Traits;
use DB;
trait Review
{
	public function getReviews($table,$column,$id){
		$pdo=DB::getPdo();

		$query=$pdo->prepare("
			SELECT 
			@countItemRate:=(SELECT COUNT(id) FROM ${table} WHERE ${column} = ?) as countItemRate,
			@oneStarCount:=(SELECT COUNT(id) FROM ${table} WHERE ${column} = ? AND rate = 1) as oneStarCount,
			@twoStarCount:=(SELECT COUNT(id) FROM ${table} WHERE ${column} = ? AND rate = 2) as twoStarCount,
			@threeStarCount:=(SELECT COUNT(id) FROM ${table} WHERE ${column} = ? AND rate = 3) as threeStarCount,
			@fourStarCount:=(SELECT COUNT(id) FROM ${table} WHERE ${column} = ? AND rate = 4) as fourStarCount,
			@fiveStarCount:=(SELECT COUNT(id) FROM ${table} WHERE ${column} = ? AND rate = 5) as fiveStarCount,
			
			@oneStarPercent:=(@oneStarCount/@countItemRate)*100 as oneStarPercent,
			@twoStarPercent:=(@twoStarCount/@countItemRate)*100 as twoStarPercent,
			@threeStarPercent:=(@threeStarCount/@countItemRate)*100 as threeStarPercent,
			@fourStarPercent:=(@fourStarCount/@countItemRate)*100 as fourStarPercent,
			@fiveStarPercent:=(@fiveStarCount/@countItemRate)*100 as fiveStarPercent,

			@averageStarData:=( SELECT IF((@oneStarPercent <> 0 OR @twoStarPercent <> 0 OR @threeStarPercent <> 0 
				OR @fourStarPercent <> 0 OR @fiveStarPercent <> 0),
			(5*@fiveStarCount + 4*@fourStarCount + 3*@threeStarCount + 2*@twoStarCount + 1*@oneStarCount)/	   (@fiveStarCount+@fourStarCount+@threeStarCount+@twoStarCount+@oneStarCount),0) ) as averageStarData,
			((@averageStarData/5)*100) as averageStarPercent 

			FROM ${table} WHERE ${column} = ? " );
		$query->bindValue(1,$id, \PDO::PARAM_INT );
		$query->bindValue(2,$id, \PDO::PARAM_INT );
		$query->bindValue(3,$id, \PDO::PARAM_INT );
		$query->bindValue(4,$id, \PDO::PARAM_INT );
		$query->bindValue(5,$id, \PDO::PARAM_INT );
		$query->bindValue(6,$id, \PDO::PARAM_INT );
		$query->bindValue(7,$id, \PDO::PARAM_INT );
		$query->execute();
		$result = $query->fetch(\PDO::FETCH_ASSOC);
		return $result ? $result :  [
			"countItemRate" => 0 ,
			"oneStarCount" => 0 ,
			"twoStarCount" => 0 ,
			"threeStarCount" => 0 ,
			"fourStarCount" => 0 ,
			"fiveStarCount" => 0 ,
			"oneStarPercent" => 0.0 ,
			"twoStarPercent" => 0.0 ,
			"threeStarPercent" => 0.0 ,
			"fourStarPercent" => 0.0 ,
			"fiveStarPercent" => 0.0 ,
			"averageStarData" => 0.0 ,
			"averageStarPercent" => 0.0
		];
	}

}