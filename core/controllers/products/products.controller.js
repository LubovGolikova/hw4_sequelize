const {productsService} = require("../../services");

module.exports = {
    getAllproducts: async(req,res) => {
        const products = await productsService.getProducts()

        res.json(products)
    },
    getOneProduct: async (req,res) =>{
        const {name} = req.params;

        const product = await productsService.getProductByName(name)

        res.json(product)
    },
    createProduct: async (req,res) => {
        const product = req.body;
        const x = await productsService.createProduct(product);

        res.json(x);
    },
    updateProduct:async (req,res) => {
        const data = req.body;
        const {id} = req.params;

        const db = productsService.updateProduct(id,data)
        res.json(db)
    }
}