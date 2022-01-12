const priceInJPY = 5000;

// TODO
const currency = new Map ([
  ["USD" , 14000] ,
  ["JPY" , 131] ,
  ["SGD" , 11000] , 
  ["MYR" , 3500] ,
]);

const priceInIDR = currency.get("JPY") * priceInJPY;
console.log(currency.get("USD"));
console.log(currency.get("JPY"));
console.log(currency.get("SGD"));
console.log(currency.get("MYR"));
console.log(priceInIDR);
