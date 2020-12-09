const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const userSchema = new mongoose.Schema({
   
    email: String,
    senha: String,
    cpf: String,
    nome: String,
    id_usuario: String,
    data_nascimento: Date,
    telefone: Number, 
    endereco: String

  });

const User = mongoose.model('User', userSchema);
module.exports = User;