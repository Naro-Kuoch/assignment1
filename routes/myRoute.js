const express = require('express');
const router = express.Router();
const control = require('../controller/admin');
const controlPro = require('../controller/productControl');

router.get('/home',control.getHomePage );
router.get('/signup', control.signUp);
router.get('/signin',control.signIn);
router.get('/product',control.product);
router.post('/register',control.register);
router.post('/logIn',control.logIn);
router.get('/admin',control.manageProduct);
router.post('/searchemail',control.searchEmail)

router.post('/addproduct',controlPro.addProduct);
router.get('/getproduct',controlPro.getproduct);

module.exports=router
