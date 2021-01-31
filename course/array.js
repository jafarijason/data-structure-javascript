const products = ['book1','book2','book3']


for(const item of products){
    console.log(item);
}


products.push('book4')

console.log(products );

console.log(products.length);

const productIndex = products.findIndex((item)=>  item === 'book3')

console.log(productIndex);