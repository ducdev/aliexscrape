#!/usr/bin/env node
const request = require('request');

const [,, ...args] = process.argv;

request(args[0], { json: true }, (err, res, body) => {
  if (err)
    return console.log(err);
  const data = {};
  data.productId = /(?<=\/)(\d+)(?=\.)/.exec(args[0])[1];
  data.productTitle = /itemprop="name">(.*)</.exec(body)[1];
  console.log(data);
});
