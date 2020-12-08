// arquivo para importar todos os routers_servers utilizados na aplicação:

const express = require('express');
const router = express.Router();

const produtoRouter = require('./produto.router');
const authRouter = require('./auth.router');

// todas as requisições fietas para /produtos vão para produtoRouter:
router.use('/produtos', produtoRouter);

router.use('/auth', authRouter);

module.exports = router;