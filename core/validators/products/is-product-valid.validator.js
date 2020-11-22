const Joi = require('joi')

module.exports = Joi.object().keys({
    id: Joi.number().integer().optional(),
    name: Joi.string().trim().min(2).max(15).required(),
    price: Joi.number().integer().required()
});
