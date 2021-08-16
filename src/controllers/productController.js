var Product = require("../models/Product");
const environment = require('../../environment');

function setMessage(code, msg, data) {
    return {
        code: code,
        message: msg,
        data: data
    }
}



function getStatus() {
    return "Exito"
}

function listSoldProducts() {
    return environment.soldProducts;
}
function sellProducts(listProducts) {
    let soldProducts = [];
    let notSoldProducts = [];
    for (const key in listProducts) {
        if (Object.hasOwnProperty.call(listProducts, key)) {
            const product = listProducts[key];
            let add = addToSoldList(product);
            if (add) {
                soldProducts.push(add);
            } else {
                notSoldProducts.push(product)
            }
        }
    }
    return soldProducts.length > 0 ?
        setMessage(0, "sold products", { sold: soldProducts, notSold: notSoldProducts }) :
        setMessage(1, "not sold products", { sold: soldProducts, notSold: notSoldProducts });
}

function evaluateProducts(days) {

}

function addToSoldList(product) {
    let prod = new Product(getProductById(product.id))
    if (prod) {
        environment.soldProducts.push(prod)
        return prod;
    } return null;
}

function getProductById(id) {
    let finded = environment.products.find(product => {
        return product.id === id
    })
    return finded ? finded : null

}

module.exports = { getStatus, listSoldProducts, sellProducts };