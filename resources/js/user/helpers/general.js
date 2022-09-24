export function showAveragePercent(arr) {
	return ((arr.reduce((a, b) => a + b, 0) / arr.length)/5)*100;
}
export function showPrice(price){
	return parseInt(price).toString()
}

export function showPromotionPercentage(normalPrice,salePrice){
	return ( normalPrice - salePrice )*100/normalPrice
}