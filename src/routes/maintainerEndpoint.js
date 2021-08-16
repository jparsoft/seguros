const { Router } = require('express');
const mainRouter = Router();
const maintainerController = require('../controllers/maintainerController')

mainRouter.post('/maintainer/addProducts', function (request, response) {
    const products = request.body;    
    response.json(maintainerController.addProducts(products));
});

mainRouter.post('/maintainer/listProducts', function (request, response) {
    response.json(maintainerController.getListProducts());
});

mainRouter.post('/maintainer/deleteById', function (request, response) {
    const id = request.body;
    response.json(maintainerController.deleteById(id));
});
mainRouter.post('/maintainer/updateById', function (request, response) {
    const product = request.body;
    response.json(maintainerController.updateById(product));
});


module.exports = mainRouter;
