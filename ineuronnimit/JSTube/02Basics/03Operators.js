var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount percent is:" + Math.round(discountPercent) +"% Off")
