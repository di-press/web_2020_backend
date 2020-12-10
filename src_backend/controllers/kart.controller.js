const kartService = require('../services/kart.service'); 

const kartController = {
    create: async(req, res) => {
      
        const {ref, quantity} = req.body;
        
        const addedProduct = await kartService.create(ref, quantity);

        return res.json(addedProduct);
    },

    findById: async(req, res) => {
  
        const id = req.params.id;
        const produto = await kartService.findById(id);
        
        return res.json(produto);
    },

    find: async(req, res) => {
  
        const produtos = await kartService.find();
        // find all documents
      
        return res.json(produtos);
    },

    findByColor: async(req, res) => {

        const produtos = await kartService.findByColor();

        return res.json(produtos);
    },

    updateById: async(req, res) => {
        const id = req.params.id;

        const ref = req.body.ref;
        const quantity = req.body.quantity;
          
        const produto = await kartService.updateById(id, ref, quantity); // returns Query; new : true retorna o novo objeto
          
        return res.json(produto);
    },

    deleteById: async(req, res) => {
  
        const id = req.params.id;
          
        const produto = await kartService.deleteById(id); 
          
        return res.json(produto);
    }

}

module.exports = kartController;
