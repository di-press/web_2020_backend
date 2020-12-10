//const { Router } = require('express');
const express = require('express');
const router = express.Router();

const kartController = require('../controllers/kart.controller');

router.post('/', kartController.create);
  
router.get('/findByColor', kartController.findByColor);
   
router.get('/', kartController.find);
    
router.put('/:id', kartController.updateById); 

router.delete('/:id', kartController.deleteById);

router.get('/:id', kartController.findById);

module.exports = router;