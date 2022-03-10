const express = require('express');
const router = express.Router();
const { searchGitHub } = require('../controller/gitController')

router.get('/github', searchGitHub);

module.exports = { router }