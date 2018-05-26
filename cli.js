#!/usr/bin/env node
const rp = require('request-promise');
const cheerio = require('cheerio');

const [,, ...args] = process.argv;

const data = {};

rp(args[0])
  .then(response => {
    const $ = cheerio.load(response);
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
    rawPricing.map(pricing => {
      const pricingData = {
        singlePricing: pricing.skuVal.actSkuCalPrice,
        bulkPricing: pricing.skuVal.actSkuBulkCalPrice,
        bulkOrder: pricing.skuVal.bulkOrder,
      }
      if (pricing.skuAttr) {
        pricingData.combinedOptions = pricing.skuAttr.match(/[0-9]{1,20}:[0-9]{1,20}/g);
      }
      data.pricing.push(pricingData);
    })
    // freight, get real-time here => https://freight.aliexpress.com/ajaxFreightCalculateService.htm?productid=32830803458&count=1&currencyCode=USD&country=TH
    // description
    const descriptionSource = /window.runParams.detailDesc="(.*)";/.exec(html)[1];
    return rp(descriptionSource);
  })
  // description
  .then(response => {
    const $ = cheerio.load(response);
    const wrapped = $(response);
    wrapped.find('kse\\:widget').remove(); // remove <kse:widget> tag
    data.description = wrapped.html();
    console.log(JSON.stringify(data));
  })
  .catch((err) => {
    console.log(err);
  })
