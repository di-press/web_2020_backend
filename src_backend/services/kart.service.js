const Kart = require('../models/kart.model');

const kartService = {
    //esse text deve ser substituido por outros parametros. nao funfa com essa linha:
    create: async(ref, quantity) => {
        
        const addedProduct = await Kart.create({ 
            ref,
            quantity,
        });

        return addedProduct;
    },

    findById: async(id) => {
  
        const produto = await Kart.findOne({ _id: id }).exec();
        
        return produto;
    },

    find: async() => {
        const produtos = await Kart.find({});
      
        return produtos;
    },

    updateById: async(id, ref, quantity) => {
        const produto = await Kart.findOneAndUpdate({ _id: id}, { ref, quantity }, { new: true }); // returns Query; new : true retorna o novo objeto
          
        return produto;
    },

    deleteById: async(id) => {
          
        const produto = await Kart.findOneAndDelete({ _id: id}); 
          
        return produto;
    }
}

module.exports = kartService;