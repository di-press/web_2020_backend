const authService = require('../services/auth.service'); 
const User = require('../models/user.model');

const authController = {
    signup: async(req, res) => {

        const email = req.body.email;
        const senha = req.body.senha;
        const cpf = req.body.cpf;
        const nome = req.body.nome;
        const id_usuario = req.body.id_usuario;
        const data_nascimento = req.body.data_nascimento;
        const telefone = req.body.telefone;
        const endereco = req.body.endereco;

              
        const createdUser = await authService.signup(email, senha, cpf, nome, id_usuario, data_nascimento, telefone, endereco);

        if(!createdUser){
            //significa que o usuário já está cadastrado. Enviar erro(400):
            return res.status(400).json();
        }

        return res.json(createdUser);
    },

    signin: async(req, res) => {
  
        const email = req.body.email;
        const senha = req.body.senha;

        // checa se o usuário está cadastrado no banco:
        const user = await User.findOne({ email: email }).exec();
     

        if(!user){
            //significa que o usuário nunca foi cadastrado,
            //ou inseriu dados incorretos. Enviar erro(400):
            
            return res.status(400).json();
        }

        //testar se a senha confere!
        
        
        return res.json(user);
    }

}

module.exports = authController;
