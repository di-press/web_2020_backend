
const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const authMiddle = require('../midlewares/auth.middle')


router.post('/signup', authController.signup);

router.post('/signin', authController.signin);

router.post('/create', [authMiddle.verifyToken, authMiddle.isAdmin], authController.create);

router.get('/find', [authMiddle.verifyToken, authMiddle.isAdmin], authController.find);

router.put('/:id', [authMiddle.verifyToken, authMiddle.isAdmin], authController.updateById); 

router.delete('/:id', [authMiddle.verifyToken, authMiddle.isAdmin] ,authController.deleteById);




module.exports = router;