const rp = require('request-promise');
const cheerio = require('cheerio');

const aliexpressScrapper = (productId) => {
  const data = {};
  return rp(`https://www.aliexpress.com/item/xxx/${productId}.html`)
    .then(response => {
      const $ = cheerio.load(response);
      // productId
      data.productId = productId;
      // productTitle
      data.productTitle = /itemprop="name">(.*)</.exec(response)[1];
      // variants
      data.variants = [];
      $(response).find('#j-product-info-sku').children().each((i, child) => {
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
      $(response).find('.image-thumb-list').children().each((i, li) => {
        data.pics.push($(li).find('img').attr('src'));
      })
      // pricing
      data.pricing = [];
      const pricingJSON = /var.skuProducts=(.*);/.exec(response)[1];
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
      // specs
      data.specs = [];
      $(response).find('ul.product-property-list.util-clearfix > li').each((i, li) => {
        data.specs.push({
          propertyTitle: $(li).find('span.propery-title').text(),
          propertyDescription: $(li).find('span.propery-des').text(),
        });
      });
      // description
      const descriptionSource = /window.runParams.detailDesc="(.*)";/.exec(response)[1];
      return rp(descriptionSource);
    })
    // description
    .then(response => {
      const $ = cheerio.load(response);
      const wrapped = $(`<div>${response}</div>`);
      wrapped.find('kse\\:widget').remove(); // remove <kse:widget> tag
      wrapped.find('div:has(div:has(div:has(div:has(div:has(a)))))').remove(); // remove related products widgets like 32831471018
      data.description = wrapped.html();
      return JSON.stringify(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = aliexpressScrapper;
