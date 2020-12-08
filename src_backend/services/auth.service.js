const User = require('../models/user.model');

const userService = {

    signup: async(email, senha, cpf, nome, id_usuario, data_nascimento, telefone, endereco) => {
    
        // vendo se já existe um usuário com este email cadastrado:
        const user = await User.findOne({ email : email });

        // se o usuário já existe, não devemos criar uma nova conta:
        if(user){
            return null;
        }
        
        const createdUser = await User.create({ 
        
            email,
            senha,
            cpf,
            nome,
            id_usuario,
            data_nascimento,
            telefone, 
            endereco
            
        });

        return createdUser;
    
    },

    signin: async(email, senha) => {

        
        const user = await User.findOne({ email : email });

        // caso o usuário digite uma senha incorreto, retorna-se null:
        if(user.senha !== senha ){
            return null;
        }

        return user;
    
    }

}

module.exports = userService;