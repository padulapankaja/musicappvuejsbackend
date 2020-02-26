const express = require('express');
const router = express.Router();



const user_controller = require('../Contollers/user.controllers');

router.post('/test', user_controller.test);
router.get('/all', user_controller.getallusers);
router.get('/me', user_controller.getuserfromid);
router.post('/regiser', user_controller.registerUser);
router.post('/login', user_controller.userlogin);



module.exports = router;