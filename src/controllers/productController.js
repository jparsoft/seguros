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
    const loop = Number(days.days);
    for (let day = 0; day < loop; day++) {
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
    recalculatedProduct.setPrice(recalculatePrice(day, product))
    return recalculatedProduct;
}

function recalculatePrice(day, baseProduct) {
    if (baseProduct.price > 0) {
        return baseProduct.price - day > 0 ? baseProduct.price - day : 0
    } return 0;

}

/**
 * Una vez que la fecha de venta ha pasado, sellIn < 0 , los precios de cada producto, se degradan el doble de rapido.
 * El precio de un producto, nunca es negativo.
 * El precio de un producto nunca supera los 100.
 * El producto "Full cobertura" incrementa su precio a medida que pasa el tiempo.
 * El producto "Full cobertura Super duper", tal como el "Full Cobertura", incrementa su precio a medida que se acerca su fecha de vencimiento:
 * - El precio se incrementa en 2 cuando quedan 10 dias o menos y se incrementa en 3, cuando quedan 5 dias o menos.
 * - El precio disminuye a 0 cuando se vence el tiempo de venta.
 * El producto "Super avance" dismuniye su precio el doble de rapido que un producto normal.
 * El producto "Mega cobertura", nunca vence para vender y nunca disminuye su precio.
 * El producto "Mega cobertura" tiene un precio fijo de 180.
 */
function finalizeDay() {
    try {
        environment.products.forEach(product => {
            recalculateProduct(product)
        })
    } catch (error) {
        return setMessage(1, error, [])
    }
    return setMessage(0, "finalizeDay ok", environment.products)
}

function recalculateProduct(product) {
    for (const key in validations) {
        if (Object.hasOwnProperty.call(validations, key)) {
            const status = validations[key](product);
            if (status) {
                break;
            }

        }
    }
}

function isId1OrId3(product) {
    if (product.id === 1 || product.id === 3) {
        return recalculateId1OrId3(product)
    } return false;
}
function isId2(product) {
    if (product.id === 2) {
        return recalculateId2(product)
    } return false;
}
function isId4(product) {
    if (product.id === 4) {
        return recalculateId4(product)
    } return false;
}

function recalculateId1OrId3(baseProduct) {
    let product = new Product(baseProduct);
    baseProduct.sellIn = product.sellIn - 1

    if (baseProduct.sellIn <= 0) {
        baseProduct.price = 0
    }else if (baseProduct.sellIn > 10) {
        let newPrice = product.price + 1
        baseProduct.price = newPrice > 100 ? 100 : newPrice
    }else if (baseProduct.sellIn <= 10 && baseProduct.sellIn > 5) {
        let newPrice = product.price + 2
        baseProduct.price = newPrice > 100 ? 100 : newPrice
    } else if (baseProduct.sellIn <= 5 && baseProduct.sellIn >=1) {
        let newPrice = product.price + 3
        baseProduct.price = newPrice > 100 ? 100 : newPrice
    }
    return true;
}

function recalculateId2(baseProduct) {
    /* El producto "Mega cobertura", nunca vence para vender y nunca disminuye su precio.
     El producto "Mega cobertura" tiene un precio fijo de 180. */
    let product = new Product(baseProduct);
    baseProduct.sellIn = product.sellIn - 1
    baseProduct.price = 180
    return true;
}

function recalculateId4(baseProduct) {
    /* El producto "Super avance" dismuniye su precio el doble de rapido que un producto normal.*/
    let product = new Product(baseProduct);
    baseProduct.sellIn = product.sellIn - 1
    let newPrice = product.price - 2
    baseProduct.price = newPrice > 0 ? newPrice : 0
    return true;
}

function recalculateDefault(baseProduct) {
    let product = new Product(baseProduct);
    baseProduct.sellIn = product.sellIn - 1
    let newPrice = product.price - 1
    baseProduct.price = newPrice > 0 ? newPrice : 0
    return true;
}

var validations = [isId1OrId3, isId2, isId4, recalculateDefault]

module.exports = { getStatus, listSoldProducts, sellProducts, evaluateProducts, finalizeDay };