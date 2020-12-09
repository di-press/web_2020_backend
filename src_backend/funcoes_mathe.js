/*

dentro do script, dar:


import axios from 'axios';

async findNovidades(){
    //método get: pega todos os produtos com a categoria Novidades do Mongo(3 produtos):
    const response = await axios.get("http://localhost:3000/api/produtos/findNovidades");

    return response.data;
},

async findPromocoes(){
    //método get: pega todos os produtos do Mongo:
    const response = await axios.get("http://localhost:3000/api/produtos/findPromocoes");

    return response.data;
},

async findExclusivos(){
    //método get: pega todos os produtos do Mongo:
    const response = await axios.get("http://localhost:3000/api/produtos/findExclusivos");

    return response.data;
},

*/