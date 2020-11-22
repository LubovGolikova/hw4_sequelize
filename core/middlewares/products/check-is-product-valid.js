const Joi = require('joi')
const {productsValidators} = require("../../validators");

module.exports = (req, res, next) => {
    try {
        const product = req.body;

        const {error} = Joi.validate(product, productsValidators.isProductValid)

        if (error) {
            throw new Error('Wrong data')
        } else {
            next()
        }

    } catch (e) {
        res.json(e.message)
    }
}
