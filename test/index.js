const interfaces = require('../interfaces.js')
const mock = require('../mock.js')
const router = require("express").Router();


console.log(interfaces,mock);

interfaces.forEach(({ type, url, name }) => router[type](url, mock[name]));
