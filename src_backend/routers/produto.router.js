//const { Router } = require('express');
const express = require('express');
const router = express.Router();
const authMiddle = require('../midlewares/auth.middle')

const produtoController = require('../controllers/produto.controller');

// abaixo, tem-se uma referência de cada função;
// exemplo: produtoController.create é uma referência para a função de create

router.post('/', [authMiddle.verifyToken, authMiddle.isAdmin] ,produtoController.create);

//router.get('/:id', produtoController.findById);
  
//router.get('/findByColor', produtoController.findByColor);

router.get('/findNovidades', produtoController.findNovidades);

router.get('/findPromocoes', produtoController.findPromocoes);

router.get('/findExclusivos', produtoController.findExclusivos);

router.get('/findMoletons', produtoController.findMoletons);

router.get('/findCamisetas', produtoController.findCamisetas);

router.get('/findShorts', produtoController.findShorts);

router.get('/findAzul', produtoController.findAzul);

router.get('/findAmarelo', produtoController.findAmarelo);

router.get('/findPreto', produtoController.findPreto);

router.get('/findP', produtoController.findP);

router.get('/findM', produtoController.findM);

router.get('/findG', produtoController.findG);

router.get('/findGG', produtoController.findGG);

router.get('/', produtoController.find);
    
router.put('/:id', [authMiddle.verifyToken, authMiddle.isAdmin] ,produtoController.updateById); 

router.delete('/:id', [authMiddle.verifyToken, authMiddle.isAdmin] ,produtoController.deleteById);

//router.get('/:id', produtoController.findById);

module.exports = router;