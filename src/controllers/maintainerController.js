var Product = require("../models/Product");
const environment = require('../../environment');


function setMessage(code, msg, data) {
    return {
        code: code,
        message: msg,
        data: data
    }
}


function getListProducts() {
    return setMessage(0, "list of products", environment.products);
}

function addProducts(listProducts) {
    try {
        let existsProducts = [];
        let listAdds = [];
        for (const key in listProducts) {
            if (Object.hasOwnProperty.call(listProducts, key)) {
                const element = listProducts[key];
                let prod = new Product(element)

                if (!productExists(prod.getId())) {
                    environment.products.push(prod);
                    listAdds.push(prod);
                } else { existsProducts.push(prod) }
            }
        }
        return setMessage(existsProducts.length > 0 ? 3 : 0, "add products", { list_adds: listAdds, duplicate_no_add: existsProducts })
    } catch (error) {
        return setMessage(1, error)
    }

}

function productExists(id) {
    let finded = environment.products.findIndex(product => {
        return product.id === id
    });
    return finded > -1
}


function deleteById(id) {
    let finded = environment.products.findIndex(product => {
        return product.id === id.id
    });   
    if (finded > -1) {
        let deleted = environment.products.splice(finded, 1)
        return setMessage(0, "product deleted", deleted)
    } else {
        return setMessage(1, "product not found", id)
    }
}


function updateById(prod) {
    let products = environment.products;
    let finded = products.find(product => {
        return product.id === prod.id
    })
    if (finded) {
        finded.name = prod.name;
        finded.price = prod.price;
        finded.sellIn = prod.sellIn;
        return setMessage(0, "update product", finded)
    } return setMessage(1, "product not found")

}

module.exports = { getListProducts, updateById, deleteById, addProducts };