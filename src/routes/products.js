//Necesario para exportar router
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json(new Date().toDateString());
});

router.post('/sell', function (req, res) {
    const data = req.body;
    res.send('Got a POST request sell');
});
router.post('/listProducts', function (req, res) {
    const data = req.body;
    res.send('Got a POST request listProducts');
});
router.post('/evaluateProducts', function (req, res) {
    const data = req.body;
    res.send('Got a POST request evaluateProducts');
});
// exportar modulo
module.exports = router;