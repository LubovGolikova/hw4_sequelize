const {productsService} = require("../../services");

module.exports = (req,res,next) => {
    try {
        const {name} = req.body;

        let product = productsService.getProductByName(name);

        if(product) {
            throw new Error('Product already exist')
        }

        next();
    } catch (e) {
        res.json(e.message)
    }
}
