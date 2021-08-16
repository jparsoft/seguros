var Product = require("../models/Product");
const environment = require('../../environment');

var seguro = new Product(3,'test',0,0);



function getStatus(){
    return "Exito"
}

function listSoldProducts(){
    return environment.soldProducts;
}
function sellProducts(listProducts){
    return environment.products;
}

function evaluateProducts(days){

}

module.exports = {getStatus, listSoldProducts};