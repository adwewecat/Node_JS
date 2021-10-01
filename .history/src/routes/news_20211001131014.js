const express = require("express");
const router = express.Router();

const newsController = require('../app/controllers/NewController')

router.use('/news')

module.exports = router