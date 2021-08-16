const express = require('express');
const app = express();
const environment = require('../environment');
const morgan = require('morgan');

// Import routes
const productRoutes = require('./routes/productsEndpoint');
const maintainerEndpoint = require('./routes/maintainerEndpoint');

// Settingss
app.set('port', process.env.PORT || environment.environment.port); /* configure port*/
// app.set('routes', path.join(__dirname, 'routes'));

// Start server
app.listen(app.get('port'), () => {
    console.info(`Authentication server is alive on port: ${app.get('port')}`);
});


//Middelware
app.use(morgan('dev')); /* for url logs */
// app.use(express.urlencoded({ extended: false }));/*server only plain text */
app.use(express.json());/*server json data */


// Routes
app.use(productRoutes);
app.use(maintainerEndpoint);

module.exports = app