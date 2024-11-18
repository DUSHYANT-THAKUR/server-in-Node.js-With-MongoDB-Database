const route = require("express").Router();
const testController = require('../Controller/mongoApi')
route.post("/test",testController.test)
module.exports = route;