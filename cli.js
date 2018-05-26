#!/usr/bin/env node
const aliexpressScrapper = require('./index');
const [,, ...args] = process.argv;

aliexpressScrapper(args[0]).then(response => console.log(response)).catch(error => console.log(error));
