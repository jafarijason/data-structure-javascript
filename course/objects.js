const products = {
    title:'Book',
    price: 89,
    info() {
        console.log(this.title, this.price, this);
    }
}

console.log(products );

products.color = 'blue'

console.log(products);

products.info()