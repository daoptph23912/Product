var express = require('express')
var router = express.Router()
var mess = require('../controllers/mess')
var checkLogin = require('../middlewares/checkLogin')

router.use(checkLogin.request)
router.get('/mess', checkLogin.request, mess.mess)

module.exports = router