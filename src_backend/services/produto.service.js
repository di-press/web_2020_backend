const Produto = require('../models/produto.model');

const produtoService = {
    //esse text deve ser substituido por outros parametros. nao funfa com essa linha:
    create: async(name, id_produto, preco_produto, unidades_estoque, unidades_vendidas, cor, tam_produto, categoria_produto, foto, descricao_produto, descricao_foto) => {

        
        const createdProduto = await Produto.create({ 
        
            name,
            id_produto,
            preco_produto,
            unidades_estoque,
            unidades_vendidas, 
            cor,
            tam_produto,
            categoria_produto,
            foto,
            descricao_produto,
            descricao_foto
            
            });

        return createdProduto;
    },

    findById: async(id) => {
  
        const produto = await Produto.findOne({_id: id }).exec();
        
        return produto;
    },

    find: async() => {
  
        const produtos = await Produto.find({});
        // find all documents
      
        return produtos;
    },

    findByColor: async() => {

        const produtos = await Produto.find({ cor: 'Azul' }).exec();
        //const produtos = await Produto.find({ cor: 'Azul' });


        return produtos;

    },

    updateById: async(id, name, id_produto, preco_produto, unidades_estoque, unidades_vendidas, cor, tam_produto, categoria_produto, foto, descricao_produto, descricao_foto) => {
          
        const produto = await Produto.findOneAndUpdate({ _id: id}, {id_produto, name, preco_produto,unidades_estoque, unidades_vendidas, cor,tam_produto, categoria_produto, foto, descricao_produto, descricao_foto}, {new: true}); // returns Query; new : true retorna o novo objeto
          
        return produto;
    },

    deleteById: async(id) => {
          
        const produto = await Produto.findOneAndDelete({ _id: id}); 
          
        return produto;
    }

}

module.exports = produtoService;