class Product {
    constructor(product) {
        this.id = Number(product.id);
        this.name = String(product.name);
        this.price = Number(product.price);
        this.sellIn = Number(product.sellIn);
    }
    //get
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getSellIn() {
        return this.sellIn;
    }

    // set
    setName(pname) {
        this.name = String(pname);
    }
    setPrice(price) {
        this.price = Number(price);
    }
    setSellIn(sellIn) {
        this.sellIn = Number(sellIn);
    }
}
module.exports = Product;