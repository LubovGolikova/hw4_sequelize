const {Router} = require('express');

const {productsController} = require("../../controllers");
const {productsMiddlewares} = require("../../middlewares");

const productsRouter = Router();

productsRouter.get('/', productsController.getAllProducts);

productsRouter.get('/:name', productsController.getOneProduct);

productsRouter.post('/', productsMiddlewares.isProductDataValid, productsController.createProduct);

productsRouter.put('/:id', productsController.updateProduct);

productsRouter.delete('/:id', productsController.deteleProduct);

module.exports = productsRouter;
