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

let evaluatedProducts = [];

function evaluateProducts(days) {
    const loop = Number(days);
    for (let day = 0; index < loop; day++) {
        evaluate(day)
    }
    return evaluatedProducts;
}

function evaluate(day) {
    if (day === 0) {
        evaluatedProducts.push({ "day 0": environment.soldProducts })
    } else {
        evaluateByDay(day)
    }

}
function evaluateByDay(day) {
    let tittle = "day " + day;
    let evaluatedList = []

    for (const key in environment.soldProducts) {
        if (Object.hasOwnProperty.call(environment.soldProducts, key)) {
            evaluatedList.push(recalculate(day, environment.soldProducts[key]))
        }
    }
    evaluatedProducts.push({ [tittle]: evaluatedList })
}

function recalculate(day, product) {
    let recalculatedProduct = new Product(product);
    recalculatedProduct.setSellIn(product.sellIn - day)
    recalculatedProduct.setPrice(recalculatePrice(day, product.price))
    return recalculatedProduct;
}

function recalculatePrice(day, basePrice) {

}

function esFullCobertura() {

}

module.exports = { getStatus, listSoldProducts, sellProducts, evaluateProducts };