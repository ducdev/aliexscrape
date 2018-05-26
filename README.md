# aliexpress-scrapper

Get Aliexpress product details in JSON

### Installation

```
$ npm i --save aliexpress-scrapper
```

### Usage

```
import aliexpressScrapper from 'aliexpress-scrapper';

or

var aliexpressScrapper = require('aliexpress-scrapper');

aliexpressScrapper('32853590425') // 32853590425 is a productId
    .then(response => console.log(response))
    .catch(error => console.log(error));
```

### Command-line usage

```
$ npm link
$ scrape 32853590425
```

### Example output

```json
{"productId":"32853590425","productTitle":"Original Vaporesso SWAG Kit 80W Electronic Cigarette Kits With Vaporesso Swag Mod NRG SE NRG SE Mini Tank E-Cigarettes Vape Kit ","variants":[{"title":"Color:","options":[{"optionId":"14:193","text":"Black"},{"optionId":"14:173","text":"Blue"},{"optionId":"14:366","text":"Orange"},{"optionId":"14:350853","text":"Silver"}]},{"title":"Battery Capacity:","options":[{"optionId":"1328:200660823","text":"3.5ml Full Kit"},{"optionId":"1328:200660824","text":"2ml Full Kit"},{"optionId":"1328:200660825","text":"Only Swag Mod"}]},{"title":"Ships From:","options":[{"optionId":"200007763:201336100","text":"China"},{"optionId":"200007763:201336103","text":"Russian Federation"}]}],"pics":["https://ae01.alicdn.com/kf/HTB1HaISXbZnBKNjSZFKq6AGOVXaq/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg_50x50.jpg","https://ae01.alicdn.com/kf/HTB1cdCPX9tYBeNjSspkq6zU8VXaf/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg_50x50.jpg","https://ae01.alicdn.com/kf/HTB1S6lXX21TBuNjy0Fjq6yjyXXag/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg_50x50.jpg","https://ae01.alicdn.com/kf/HTB1bHk8XFuWBuNjSszbq6AS7FXah/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg_50x50.jpg","https://ae01.alicdn.com/kf/HTB1Yog9XH5YBuNjSspoq6zeNFXaJ/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg_50x50.jpg","https://ae01.alicdn.com/kf/HTB1TrBaX49YBuNjy0Ffq6xIsVXaG/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg_50x50.jpg"],"pricing":[{"singlePricing":"30.60","bulkPricing":"29.69","bulkOrder":2,"combinedOptions":["14:193","1328:200660825","200007763:201336100"]},{"singlePricing":"30.60","bulkPricing":"29.69","bulkOrder":2,"combinedOptions":["14:173","1328:200660825","200007763:201336100"]},{"singlePricing":"30.60","bulkPricing":"29.69","bulkOrder":2,"combinedOptions":["14:366","1328:200660825","200007763:201336100"]},{"singlePricing":"29.70","bulkPricing":"28.81","bulkOrder":2,"combinedOptions":["14:350853","1328:200660825","200007763:201336100"]},{"singlePricing":"44.64","bulkPricing":"43.3","bulkOrder":2,"combinedOptions":["14:193","1328:200660824","200007763:201336100"]},{"singlePricing":"45.00","bulkPricing":"43.65","bulkOrder":2,"combinedOptions":["14:193","1328:200660823","200007763:201336100"]},{"singlePricing":"44.64","bulkPricing":"43.3","bulkOrder":2,"combinedOptions":["14:173","1328:200660824","200007763:201336100"]},{"singlePricing":"45.00","bulkPricing":"43.65","bulkOrder":2,"combinedOptions":["14:173","1328:200660823","200007763:201336100"]},{"singlePricing":"44.64","bulkPricing":"43.3","bulkOrder":2,"combinedOptions":["14:366","1328:200660824","200007763:201336100"]},{"singlePricing":"45.00","bulkPricing":"43.65","bulkOrder":2,"combinedOptions":["14:366","1328:200660823","200007763:201336100"]},{"singlePricing":"43.92","bulkPricing":"42.6","bulkOrder":2,"combinedOptions":["14:350853","1328:200660824","200007763:201336100"]},{"singlePricing":"44.10","bulkPricing":"42.78","bulkOrder":2,"combinedOptions":["14:350853","1328:200660823","200007763:201336100"]},{"singlePricing":"30.60","bulkPricing":"29.69","bulkOrder":2,"combinedOptions":["14:193","1328:200660825","200007763:201336103"]},{"singlePricing":"30.60","bulkPricing":"29.69","bulkOrder":2,"combinedOptions":["14:173","1328:200660825","200007763:201336103"]},{"singlePricing":"30.60","bulkPricing":"29.69","bulkOrder":2,"combinedOptions":["14:366","1328:200660825","200007763:201336103"]},{"singlePricing":"29.70","bulkPricing":"28.81","bulkOrder":2,"combinedOptions":["14:350853","1328:200660825","200007763:201336103"]},{"singlePricing":"44.64","bulkPricing":"43.3","bulkOrder":2,"combinedOptions":["14:193","1328:200660824","200007763:201336103"]},{"singlePricing":"45.00","bulkPricing":"43.65","bulkOrder":2,"combinedOptions":["14:193","1328:200660823","200007763:201336103"]},{"singlePricing":"44.64","bulkPricing":"43.3","bulkOrder":2,"combinedOptions":["14:173","1328:200660824","200007763:201336103"]},{"singlePricing":"45.00","bulkPricing":"43.65","bulkOrder":2,"combinedOptions":["14:173","1328:200660823","200007763:201336103"]},{"singlePricing":"44.64","bulkPricing":"43.3","bulkOrder":2,"combinedOptions":["14:366","1328:200660824","200007763:201336103"]},{"singlePricing":"45.00","bulkPricing":"43.65","bulkOrder":2,"combinedOptions":["14:366","1328:200660823","200007763:201336103"]},{"singlePricing":"43.92","bulkPricing":"42.6","bulkOrder":2,"combinedOptions":["14:350853","1328:200660824","200007763:201336103"]},{"singlePricing":"44.10","bulkPricing":"42.78","bulkOrder":2,"combinedOptions":["14:350853","1328:200660823","200007763:201336103"]}],"description":" \n<p> Original Vaporesso SWAG Kit 80W Electronic Cigarette Kits With Vaporesso Swag Mod NRG SE NRG SE Mini Tank E-Cigarettes Vape Kit&#xA0; </p> \n<p> <img alt=\"SWAG-KIT\" src=\"https://ae01.alicdn.com/kf/HTB1fTESXbZnBKNjSZFrq6yRLFXaj.jpg\"><img alt=\"SWAG-KIT-7\" src=\"https://ae01.alicdn.com/kf/HTB1tHCPX_lYBeNjSszcq6zwhFXan.jpg\"><img alt=\"SWAG-KIT-1\" src=\"https://ae01.alicdn.com/kf/HTB1DHuPX_lYBeNjSszcq6zwhFXap.jpg\"><img alt=\"SWAG-KIT-2\" src=\"https://ae01.alicdn.com/kf/HTB1cT3PXf6TBKNjSZJiq6zKVFXa1.jpg\"><img alt=\"SWAG-KIT-3\" src=\"https://ae01.alicdn.com/kf/HTB1tX.UXXooBKNjSZFPq6xa2XXaO.jpg\"><img alt=\"SWAG-KIT-6\" src=\"https://ae01.alicdn.com/kf/HTB1VSw8XH1YBuNjSszeq6yblFXa9.jpg\"><img alt=\"SWAG-KIT-6-(2)\" src=\"https://ae01.alicdn.com/kf/HTB1bd3RXbZnBKNjSZFGq6zt3FXao.jpg\"></p>"}
```

### Development

Want to contribute, folks? Great! PRs are welcome!

### Todos

 - Fix known bugs
 - Make some improvements/optimizations

License
----

MIT
