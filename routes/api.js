var express = require('express')
var router = express.Router()
var Api=require('../controllers/api/product.api')
router.get('/product',Api.listProduct)

// router.get('addUser',Api.addPro)
// router.post('addUser',Api.addPro)
module.exports=router