
const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/signup', authController.signup);

router.post('/signin', authController.signin);

router.get('/find', authController.find);

router.put('/:id',authController.updateById); 

router.delete('/:id',authController.deleteById);




module.exports = router;