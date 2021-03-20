const express = require('express');
const Controller = require('../modelAndcontroller/controller');
const router = express.Router();


router
    .route('/')
    .get(Controller.getAllCompany);

module.exports = router;