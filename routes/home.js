const { Router } = require('express');
const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController');

routes.get('/', homeController.viewHome);

module.exports = routes;
