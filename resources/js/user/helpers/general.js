export function showPrice(price){
	return parseInt(price).toString()
}

export function showPromotionPercentage(normalPrice,salePrice){
	return ( normalPrice - salePrice )*100/normalPrice
}