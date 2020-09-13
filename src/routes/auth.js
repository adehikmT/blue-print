// ============modules========
const express = require("express");

// ============Route==========
const Route = express.Router();

// ===========helpers=========
const { validLogin, validRegist, validRefresh } = require("../helpers");

// ===========controllers=====
const { register, login, getToken } = require("../controllers");

// ===========http method=====
Route.post("/register", validRegist, register)
  .post("/login", validLogin, login)
  .post("/token", validRefresh, getToken);

// ===========module export===
module.exports = Route;
