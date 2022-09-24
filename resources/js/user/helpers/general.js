export function showAveragePercent(arr) {
	 var oneStarCount=0
	 var twoStarCount=0
	 var threeStarCount=0
	 var fourStarCount=0
	 var fiveStarCount=0
	 var countItem=0
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
		countItem++
	} )
	var oneStarPercent=(oneStarCount/countItem)*100
	var twoStarPercent=(twoStarCount/countItem)*100
	var threeStarPercent=(threeStarCount/countItem)*100
	var fourStarPercent=(fourStarCount/countItem)*100
	var fiveStarPercent=(fiveStarCount/countItem)*100

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
export function showPrice(price){
	return parseInt(price).toString()
}

export function showPromotionPercentage(normalPrice,salePrice){
	return ( normalPrice - salePrice )*100/normalPrice
}