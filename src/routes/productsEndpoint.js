const { Router } = require('express');
const router = Router();
const productController = require('../controllers/productController')

router.get('/', (req, res) => {
    res.json(new Date().toDateString());
});

router.post('/products/sell', function (req, res) {
    let products = req.body;
    res.json(productController.sellProducts(products));
});

router.post('/products/listSoldProducts', function (req, res) {
    res.json(productController.listSoldProducts());
});

router.post('/products/evaluateProducts', function (req, res) {
    const days= req.body;
    res.json(days);
});

router.post('/products/finalizeDay', function (req, res) {    
    res.json({});
});



// exportar modulo
module.exports = router;