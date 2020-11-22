const productsRouter = require("../products/products.router");


const {Router} = require('express');

const apiRouter = Router();

apiRouter.use('/products', productsRouter);

module.exports = apiRouter;




