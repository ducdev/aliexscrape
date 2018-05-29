#!/usr/bin/env node
const AliexScrape = require('./index');
const [,, ...args] = process.argv;

AliexScrape(args[0]).then(response => console.log(response)).catch(error => console.log(error));
