const express = require('express');
const AuthController = require('../Controllers/AuthController');

const router = express.Router();

router.post('/SignUp', AuthController.SignUp)
router.post('/SignIn', AuthController.Login)
router.get('/GetUsername/:email', AuthController.CurrentUserName)

module.exports = router;