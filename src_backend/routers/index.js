// arquivo para importar todos os routers_servers utilizados na aplicação:

const express = require('express');
const router = express.Router();

const produtoRouter = require('./produto.router');
const authRouter = require('./auth.router');
const kartRouter = require('./kart.router');

// todas as requisições fietas para /produtos vão para produtoRouter:
router.use('/produtos', produtoRouter);
router.use('/auth', authRouter);
router.use('/carrinho', kartRouter);

module.exports = router;