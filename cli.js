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
          optionId: `${$(child).find('ul').attr('data-sku-prop-id')}:${$(li).find('a').attr('data-sku-id')}`,
          src: optionTag.attribs.src,
          title: optionTag.attribs.title,
          bigpic: optionTag.attribs.bigpic,
        });
      } else if (optionTag.name === 'span') {
        variantData.options.push({
          optionId: `${$(child).find('ul').attr('data-sku-prop-id')}:${$(li).find('a').attr('data-sku-id')}`,
          text: $(optionTag).text(),
        });
      }
    });
    data.variants.push(variantData);
  });
  // pics
  data.pics = [];
  $(html).find('.image-thumb-list').children().each((i, li) => {
    data.pics.push($(li).find('img').attr('src'));
  })
  // pricing
  data.pricing = [];
  const pricingJSON = /var.skuProducts=(.*);/.exec(html)[1];
  const rawPricing = JSON.parse(pricingJSON);
  rawPricing.map(price => {
    // console.log(price)
    data.pricing.push({
      combinedOptions: price.skuAttr.match(/[0-9]{1,20}:[0-9]{1,20}/g),
      singlePricing: price.skuVal.actSkuCalPrice,
      bulkPricing: price.skuVal.actSkuBulkCalPrice,
      bulkOrder: price.skuVal.bulkOrder,
    })
  })
  console.log(JSON.stringify(data));

});
