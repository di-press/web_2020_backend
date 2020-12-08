// arquivo para importar todos os routers_servers utilizados na aplicação:

const express = require('express');
const router = express.Router();

const produtoRouter = require('./produto.router');
// todas as requisições fietas para /produtos vão para produtoRouter:
router.use('/produtos', produtoRouter);

module.exports = router;