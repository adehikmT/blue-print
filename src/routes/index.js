// =========modules=======
const express = require("express");
// =========Route=========
const Route = express.Router();
// =========Routes========
const Auth = require("./auth");
// =========Use Route=====
Route.use(Auth);
// =====module export=====
module.exports = Route;
