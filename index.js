const rp = require('request-promise');
const cheerio = require('cheerio');

const AliexScrape = (productId) => {
  const data = {};
  return rp(`https://www.aliexpress.com/item/xxx/${productId}.html`)
    .then(response => {
      const $ = cheerio.load(response);
      // productId
      data.productId = productId;
      // productTitle
      data.productTitle = /itemprop="name">(.*)</.exec(response)[1];
      // attributes
      data.attributes = [];
      $(response).find('#j-product-info-sku').children().each((i, child) => {
        const attributeData = {};
        attributeData.title = $(child).find('.p-item-title').text().replace(':', '');
        attributeData.options = [];
        $(child).find('ul').children().each((i, li) => {
          const optionTag = $(li).find('a').children()[0];
          if (optionTag.name === 'img') {
            attributeData.options.push({
              optionId: `${$(child).find('ul').attr('data-sku-prop-id')}:${$(li).find('a').attr('data-sku-id')}`,
              src: optionTag.attribs.src.replace(/.jpg(.*).jpg/, '.jpg'),
              text: optionTag.attribs.title,
            });
          } else if (optionTag.name === 'span') {
            attributeData.options.push({
              optionId: `${$(child).find('ul').attr('data-sku-prop-id')}:${$(li).find('a').attr('data-sku-id')}`,
              text: $(optionTag).text(),
            });
          }
        });
        data.attributes.push(attributeData);
      });
      // seller/store data
      data.store = {
        name: $(response).find('span.shop-name').find('a').text(),
        id: $(response).find('span.shop-name').find('a').attr('href').match(/(\d+)/)[0],
      }
      // pics
      data.pics = [];
      $(response).find('.image-thumb-list').children().each((i, li) => {
        data.pics.push($(li).find('img').attr('src').replace(/.jpg(.*).jpg/, '.jpg'));
      })
      // variations
      data.variations = [];
      const variationsJSON = /var.skuProducts=(.*);/.exec(response)[1];
      const rawVariations = JSON.parse(variationsJSON);
      rawVariations.map(variation => {
        const pricingData = {
          pricing: variation.skuVal.skuCalPrice,
          discount: variation.skuVal.actSkuCalPrice,
        }
        if (variation.skuAttr) {
          pricingData.combinedAttributes = variation.skuAttr.match(/[0-9]{1,20}:[0-9]{1,20}/g);
        }
        data.variations.push(pricingData);
      })
      // freight, get real-time here => https://freight.aliexpress.com/ajaxFreightCalculateService.htm?productid=32830803458&count=1&currencyCode=USD&country=TH
      // properties
      data.properties = [];
      $(response).find('ul.product-property-list.util-clearfix > li').each((i, li) => {
        data.properties.push({
          propertyTitle: $(li).find('span.propery-title').text().replace(':', ''),
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
      wrapped.find('link').remove(); // remove <link> tag
      wrapped.find('style').remove(); // remove <style> tag
      wrapped.find('div:has(div:has(div:has(div:has(div:has(a)))))').remove(); // remove related products widgets like 32831471018
      data.description = wrapped.html().replace(/(https?:\/\/+[a-z0-9A-Z-.]+aliexpress\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/g, '#'); // replace all existing aliexpress urls in description to #
      return JSON.stringify(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = AliexScrape;
