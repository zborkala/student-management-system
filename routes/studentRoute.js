const express = require('express');
const route = express.Router();
const { dashboard } = require('../controllers/studentController')

route.get('/', dashboard);

module.exports = route