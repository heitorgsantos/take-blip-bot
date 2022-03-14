const express = require('express');
const router = express.Router();
const { searchGitHub } = require('../controller/gitController')

router.get('/', searchGitHub);

module.exports = { router }