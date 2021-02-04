const express = require('express');
const router = express.Router();
const control = require('../controller/admin');

router.get('/awesome.shop',control.getHomePage );
router.get('/signup', control.signUp);
router.get('/signin',control.signIn);
router.get('/product',control.product);
router.post('/register',control.register);
router.post('/logIn',control.logIn);
router.get('/admin',control.manageProduct);
router.post('/searchemail',control.searchEmail)

module.exports=router
