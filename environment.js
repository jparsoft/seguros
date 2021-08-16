const environment = {
    port: 3200,
    version: 1.1
};
let products = [{
    id: 1,
    name: 'Full cobertura',
    price: 80,
    sellIn: 13
}, {
    id: 2,
    name: 'Mega cobertura',
    price: 180,
    sellIn: 10
}, {
    id: 3,
    name: 'Full cobertura Super duper',
    price: 20,
    sellIn: 9
}, {
    id: 4,
    name: 'Super avance',
    price: 40,
    sellIn: 3
}, {
    id: 5,
    name: 'Cobertura',
    price: 50,
    sellIn: 2
}]

let soldProducts = [];


module.exports = { environment, products,soldProducts };