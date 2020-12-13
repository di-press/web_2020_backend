const authService = require('../services/auth.service'); 

const authController = {
    signup: async(req, res) => {

        const email = req.body.email;
        const senha = req.body.senha;
        const cpf = req.body.cpf;
        const nome = req.body.nome;
        const data_nascimento = req.body.data_nascimento;
        const telefone = req.body.telefone;
        const endereco = req.body.endereco;
        const isAdmin = false;
        
        if (req.body.isAdmin && req.body.isAdmin) {
            isAdmin = true
        } 

        const createdUser = await authService.signup(email, senha, cpf,
            nome, data_nascimento, telefone, endereco, isAdmin);
        
        if (!createdUser) {
            //significa que o usuário já está cadastrado. Enviar erro(400):
            return res.status(400).json();
        }
        return res.status(200).json(createdUser);
    },

    signin: async(req, res) => {
  
        const email = req.body.email;
        const senha = req.body.senha;

        // checa se o usuário está cadastrado no banco:
        //const user = await User.findOne({ email: email }).exec();

        const user = await authService.signin(email, senha);
     

        if(!user){
            //significa que o usuário nunca foi cadastrado,
            //ou inseriu dados incorretos. Enviar erro(400):
            
            return res.status(400).json();
        }

        //testar se a senha confere!
        
        
        return res.status(200).json(user);
    },

    find: async(req, res) => {
  
        const users = await authService.find();
        // find all documents
      
          return res.json(users);
    }, 

    updateById: async (req, res) => {
        
        const user = await authService.updateById(req.body);
        return res.json(user);
    },

    create: async (req, res) => {
        if (!req.body.isAdmin) {
            req.body.isAdmin = false
        }
        createdUser = await authService.signup(
            req.body.email,
            req.body.senha,
            req.body.cpf,
            req.body.nome,
            req.body.data_nascimento,
            req.body.telefone,
            req.body.endereco,
            req.body.isAdmin
        )
        if (createdUser) {
            return res.status(200).json()
        } else {
            return res.status(400).json()
        }
    },

    deleteById: async(req, res) => {
        const id = req.params.id;
        const user = await authService.deleteById(id); 
        return res.json(user);
    }


}

module.exports = authController;
