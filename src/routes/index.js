//Necesario para exportar router
const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    res.json({
        text: 'Test'
    });
});
// exportar modulo
module.exports = router;