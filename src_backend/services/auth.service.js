const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function formatResponse(user){
    
    const token = jwt.sign({ userId: user.id }, process.env.JWT_PRIVATE_KEY);

    return{
        user: {
            email: user.email,
        },
        token
    };
}

const userService = {

    signup: async(email, senha, cpf, nome, id_usuario, data_nascimento, telefone, endereco) => {
    
        // vendo se já existe um usuário com este email cadastrado:
        const user = await User.findOne({ email : email });

        // se o usuário já existe, não devemos criar uma nova conta:
        if(user){
            return null;
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senha, salt);
        
        const createdUser = await User.create({ 
        
            email,
            senha: hash,
            cpf,
            nome,
            id_usuario,
            data_nascimento,
            telefone, 
            endereco
            
        });

        return formatResponse(createdUser);
    
    },

    signin: async(email, senha) => {

        
        const user = await User.findOne({ email : email });

        if (!user){
            console.log("usuario  nao encontrado - auth.service.js");
            return null;
        }

        // caso o usuário digite uma senha incorreto, retorna-se null:
        if(!bcrypt.compareSync(senha, user.senha)){
            console.log("senhas diferentes")
            return null;
        }

        return formatResponse(user);
    
    }

}

module.exports = userService;