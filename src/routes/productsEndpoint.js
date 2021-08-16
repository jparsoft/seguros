const { Router } = require('express');
const router = Router();
const productController = require('../controllers/productController')

router.get('/', (req, res) => {
    res.json(new Date().toDateString());
});

router.post('/sell', function (req, res) {    
    res.send(productController.getStatus());
});

router.post('/listSoldProducts', function (req, res) {
    res.json(productController.listSoldProducts());
});

router.post('/evaluateProducts', function (req, res) {
    const { days } = req.body;
    res.json(days);
});



// exportar modulo
module.exports = router;