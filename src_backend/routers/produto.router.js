//const { Router } = require('express');
const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produto.controller');

// abaixo, tem-se uma referência de cada função;
// exemplo: produtoController.create é uma referência para a função de create

router.post('/',produtoController.create);
  
router.get('/:id', produtoController.findById);
   
router.get('/', produtoController.find);
    
router.put('/:id',produtoController.updateById); 

router.delete('/:id',produtoController.deleteById);

module.exports = router;