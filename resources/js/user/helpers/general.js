export function showAveragePercent(arr) {
	 var oneStarCount=0
	 var twoStarCount=0
	 var threeStarCount=0
	 var fourStarCount=0
	 var fiveStarCount=0
	arr.map( (a) => {
		switch(a){
			case "1":
			oneStarCount++;
			break
			case "2":
			twoStarCount++;
			break;
			case "3":
			threeStarCount++;
			break;
			case "4":
			fourStarCount++;
			break;
			case "5":
			fiveStarCount++;
			break;
		}
	} )
	var oneStarPercent=(oneStarCount/arr.length)*100
	var twoStarPercent=(twoStarCount/arr.length)*100
	var threeStarPercent=(threeStarCount/arr.length)*100
	var fourStarPercent=(fourStarCount/arr.length)*100
	var fiveStarPercent=(fiveStarCount/arr.length)*100

	var averageStarData=(oneStarPercent >0 ||
		twoStarPercent >0 ||
		threeStarPercent > 0 ||
		fourStarPercent > 0 ||
		fiveStarPercent > 0 ) ? 
	(5*fiveStarCount + 
	4*fourStarCount +
	3*threeStarCount +
	2*twoStarCount +
	1*oneStarCount)/(fiveStarCount+
	fourStarCount+
	threeStarCount+
	twoStarCount+oneStarCount) : 0;
	return (averageStarData/5)*100

}

export function showPromotionPercentage(normalPrice,salePrice){
	return ( normalPrice - salePrice )*100/normalPrice
}