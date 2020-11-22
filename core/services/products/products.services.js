const {ProductModal} = require('../../dataBase/models')

module.exports = {
    createProduct: async (product) => {
        console.log(product);
        return ProductModal.create(product)
    },

    getProducts: () => {
        return ProductModal.findAll();
    },

    getProductByName: (name) => {
        return ProductModal.findOne({
            where: {name}
        });
    },

    updateProduct: (id, obj) => {
        return ProductModal.update(
            {...obj},
            {where: {id}}
        )
    },

    deleteProduct: async (id) => {
        await ProductModal.destroy({
            where: {id}
        });
    },
}
