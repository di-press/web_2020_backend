const mongoose = require('mongoose');
  //const { Schema } = mongoose;

  const produtoSchema = new mongoose.Schema({
   
    name: String,
    id_produto: String,
    preco_produto: String,
    unidades_estoque: Number,
    unidades_vendidas: Number, 
    cor: String,
    tam_produto: String,
    categoria_produto: String,
    foto: String,
    descricao_produto: String,
    descricao_foto: String,
    

  });

const Produto = mongoose.model('Produto', produtoSchema);
module.exports = Produto;
