const produtoService = require('../services/produto.service'); 

const produtoController = {
    create: async(req, res) => {

        //const text = req.body.text;
        //const name = req.body.name;
      
        const{name, id_produto, preco_produto, unidades_estoque, unidades_vendidas, cor, tam_produto, categoria_produto, foto, descricao_produto, descricao_foto} = req.body;
        
        const createdProduto = await produtoService.create(name, id_produto, preco_produto, unidades_estoque, unidades_vendidas, cor, tam_produto, categoria_produto, foto, descricao_produto, descricao_foto);

        return res.json(createdProduto);
    },

    findById: async(req, res) => {
  
        const id = req.params.id;
        const produto = await produtoService.findById(id);
        
        return res.json(produto);
    },

    find: async(req, res) => {
  
        const produtos = await produtoService.find();
        // find all documents
      
        return res.json(produtos);
    },

    findByColor: async(req, res) => {

        const produtos = await produtoService.findByColor();

        return res.json(produtos);
    },

    updateById: async(req, res) => {
    
        const id = req.params.id;
        const id_produto = req.body.id_produto;
        const name = req.body.name;
        const preco_produto = req.body.preco_produto;
        const unidades_estoque = req.body.unidades_estoque;
        const unidades_vendidas = req.body.unidades_vendidas;
        const cor = req.body.cor;
        const tam_produto = req.body.tam_produto;
        const categoria_produto = req.body.categoria_produto;
        const foto = req.body.foto;
        const descricao_produto = req.body.descricao_produto;
        const descricao_foto = req.body.descricao_foto;
          
        const produto = await produtoService.updateById(id, id_produto, name, preco_produto,unidades_estoque, unidades_vendidas, cor,tam_produto, categoria_produto, foto, descricao_produto, descricao_foto); // returns Query; new : true retorna o novo objeto
          
        return res.json(produto);
    },

    deleteById: async(req, res) => {
  
        const id = req.params.id;
          
        const produto = await produtoService.deleteById(id); 
          
        return res.json(produto);
    }

}

module.exports = produtoController;

/*
app.post('/produtos', async(req, res) => {

    //const text = req.body.text;
    //const name = req.body.name;
  
    const{name, id_produto, preco_produto, unidades_estoque, unidades_vendidas, cor, tam_produto, categoria_produto, foto, descricao_produto, descricao_foto} = req.body;
  
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
    
    return res.json(createdProduto);
});



  app.get('/produtos/:id', async(req, res) => {
  
    const id = req.params.id;
    const produto = await Produto.findOne({_id: id }).exec();
    
    return res.json(produto);
  });
  

  app.get('/produtos', async(req, res) => {
  
    const produtos = await Produto.find({});
    // find all documents
  
      return res.json(produtos);
    });
  
 
    
  app.put('/produtos/:id', async(req, res) => {
    
    const id = req.params.id;
    const id_produto = req.body.id_produto;
    const name = req.body.name;
    const preco_produto = req.body.preco_produto;
    const unidades_estoque = req.body.unidades_estoque;
    const unidades_vendidas = req.body.unidades_vendidas;
    const cor = req.body.cor;
    const tam_produto = req.body.tam_produto;
    const categoria_produto = req.body.categoria_produto;
    const foto = req.body.foto;
    const descricao_produto = req.body.descricao_produto;
    const descricao_foto = req.body.descricao_foto;
      
    const produto = await Produto.findOneAndUpdate({ _id: id}, {name, preco_produto,unidades_estoque, unidades_vendidas, cor,tam_produto, categoria_produto, foto, descricao_produto, descricao_foto}, {new: true}); // returns Query; new : true retorna o novo objeto
      
    return res.json(produto);
  });

    
  
  app.delete('/produtos/:id', async(req, res) => {
  
    const id = req.params.id;
      
    const produto = await Produto.findOneAndDelete({ _id: id}); 
      
    return res.json(produto);
  });
  
*/
  