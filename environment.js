const environment = {
    port: 3200,
    version: 1.1
};
let products = [{
    id: 1,
    name: 'Full cobertura',
    price: 100,
    sellIn: 3
}, {
    id: 2,
    name: 'Mega cobertura',
    price: 80,
    sellIn: 10
}, {
    id: 3,
    name: 'Full cobertura Super duper',
    price: 20,
    sellIn: 3
}, {
    id: 4,
    name: 'Super avance',
    price: 4,
    sellIn: 1
}, {
    id: 5,
    name: 'Cobertura',
    price: 5,
    sellIn: 0
}]

let soldProducts = [];


module.exports = { environment, products,soldProducts };