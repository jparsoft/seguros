//Necesario para exportar router
const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    res.json({
        text: 'Test'
    });
});

app.post('/sell', function (req, res) {
    res.send('Got a POST request sell');
});
app.post('/listProducts', function (req, res) {
    res.send('Got a POST request listProducts');
});
app.post('/evaluateProducts', function (req, res) {
    res.send('Got a POST request evaluateProducts');
});
// exportar modulo
module.exports = router;