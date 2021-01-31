const prices = new Set()

prices.add(1)
prices.add(2)
prices.add(1)

for( const item of prices){
    console.log(item);
}


console.log(prices.has(2));
console.log(prices.has(4));