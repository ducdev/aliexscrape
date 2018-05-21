#!/usr/bin/env node
const request = require('request');
const cheerio = require('cheerio');

const [,, ...args] = process.argv;

request(args[0], { json: true }, (err, res, html) => {
  if (err)
    return console.log(err);
  const $ = cheerio.load(html);
  const data = {};
  // productId
  data.productId = /(?<=\/)(\d+)(?=\.)/.exec(args[0])[1];
  // productTitle
  data.productTitle = /itemprop="name">(.*)</.exec(html)[1];
  // variants
  data.variants = [];
  $(html).find('#j-product-info-sku').children().each((i, child) => {
    const variantData = {};
    variantData.title = $(child).find('.p-item-title').text();
    variantData.options = [];
    $(child).find('ul').children().each((i, li) => {
      const optionTag = $(li).find('a').children()[0];
      if (optionTag.name === 'img') {
        variantData.options.push({
          src: optionTag.attribs.src,
          title: optionTag.attribs.title,
          bigpic: optionTag.attribs.bigpic,
        });
      } else if (optionTag.name === 'span') {
        variantData.options.push($(optionTag).text());
      }
    });
    data.variants.push(variantData);
  });
  // pics
  data.pics = [];
  $(html).find('.image-thumb-list').children().each((i, li) => {
    data.pics.push($(li).find('img').attr('src'));
  })
  console.log(JSON.stringify(data));

});
