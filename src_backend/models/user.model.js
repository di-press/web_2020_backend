const mongoose = require('mongoose');
  //const { Schema } = mongoose;

  const userSchema = new mongoose.Schema({
   
    email: String,
    senha: String,
    cpf: String,
    nome: String,
    id_usuario: String,
    data_nascimento: String,
    telefone: String, 
    endereco: String

  });

const User = mongoose.model('User', userSchema);
module.exports = User;
