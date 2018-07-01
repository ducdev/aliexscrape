# aliexscrape

Get Aliexpress product details in JSON

### Installation

```sh
$ npm i --save aliexscrape
```

### Usage

```js
import AliexScrape from 'aliexscrape';

// or

var AliexScrape = require('aliexscrape');

AliexScrape('32853590425') // 32853590425 is a productId
    .then(response => console.log(response))
    .catch(error => console.log(error));
```

### Command-line usage

```sh
$ git clone git@github.com:ducdev/aliexscrape.git
$ cd aliexscrape
$ npm install
$ npm link
$ scrape 32853590425
```

### Example output

```json
{"productId":"32853590425","productTitle":"Original Vaporesso SWAG Kit 80W Electronic Cigarette Kits With Vaporesso Swag Mod NRG SE NRG SE Mini Tank E-Cigarettes Vape Kit ","attributes":[{"title":"Color","options":[{"optionId":"14:193","text":"Black"},{"optionId":"14:173","text":"Blue"},{"optionId":"14:366","text":"Orange"},{"optionId":"14:350853","text":"Silver"}]},{"title":"Battery Capacity","options":[{"optionId":"1328:200660823","text":"3.5ml Full Kit"},{"optionId":"1328:200660824","text":"2ml Full Kit"},{"optionId":"1328:200660825","text":"Only Swag Mod"}]},{"title":"Ships From","options":[{"optionId":"200007763:201336100","text":"China"},{"optionId":"200007763:201336103","text":"Russian Federation"}]}],"store":{"name":"E-cig Vape Store","id":"2953022"},"pics":["https://ae01.alicdn.com/kf/HTB1HaISXbZnBKNjSZFKq6AGOVXaq/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg","https://ae01.alicdn.com/kf/HTB1cdCPX9tYBeNjSspkq6zU8VXaf/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg","https://ae01.alicdn.com/kf/HTB1S6lXX21TBuNjy0Fjq6yjyXXag/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg","https://ae01.alicdn.com/kf/HTB1bHk8XFuWBuNjSszbq6AS7FXah/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg","https://ae01.alicdn.com/kf/HTB1Yog9XH5YBuNjSspoq6zeNFXaJ/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg","https://ae01.alicdn.com/kf/HTB1TrBaX49YBuNjy0Ffq6xIsVXaG/Original-Vaporesso-SWAG-Kit-80W-Electronic-Cigarette-Kits-With-Vaporesso-Swag-Mod-NRG-SE-NRG-SE.jpg"],"variations":[{"pricing":"42.50","discount":"34.00","combinedAttributes":["14:193","1328:200660825","200007763:201336100"]},{"pricing":"42.50","discount":"34.00","combinedAttributes":["14:173","1328:200660825","200007763:201336100"]},{"pricing":"42.50","discount":"34.00","combinedAttributes":["14:366","1328:200660825","200007763:201336100"]},{"pricing":"41.25","discount":"33.00","combinedAttributes":["14:350853","1328:200660825","200007763:201336100"]},{"pricing":"62.00","discount":"49.60","combinedAttributes":["14:193","1328:200660824","200007763:201336100"]},{"pricing":"62.50","discount":"50.00","combinedAttributes":["14:193","1328:200660823","200007763:201336100"]},{"pricing":"62.00","discount":"49.60","combinedAttributes":["14:173","1328:200660824","200007763:201336100"]},{"pricing":"62.50","discount":"50.00","combinedAttributes":["14:173","1328:200660823","200007763:201336100"]},{"pricing":"62.00","discount":"49.60","combinedAttributes":["14:366","1328:200660824","200007763:201336100"]},{"pricing":"62.50","discount":"50.00","combinedAttributes":["14:366","1328:200660823","200007763:201336100"]},{"pricing":"61.00","discount":"48.80","combinedAttributes":["14:350853","1328:200660824","200007763:201336100"]},{"pricing":"61.25","discount":"49.00","combinedAttributes":["14:350853","1328:200660823","200007763:201336100"]},{"pricing":"42.50","discount":"34.00","combinedAttributes":["14:193","1328:200660825","200007763:201336103"]},{"pricing":"42.50","discount":"34.00","combinedAttributes":["14:173","1328:200660825","200007763:201336103"]},{"pricing":"42.50","discount":"34.00","combinedAttributes":["14:366","1328:200660825","200007763:201336103"]},{"pricing":"41.25","discount":"33.00","combinedAttributes":["14:350853","1328:200660825","200007763:201336103"]},{"pricing":"62.00","discount":"49.60","combinedAttributes":["14:193","1328:200660824","200007763:201336103"]},{"pricing":"62.50","discount":"50.00","combinedAttributes":["14:193","1328:200660823","200007763:201336103"]},{"pricing":"62.00","discount":"49.60","combinedAttributes":["14:173","1328:200660824","200007763:201336103"]},{"pricing":"62.50","discount":"50.00","combinedAttributes":["14:173","1328:200660823","200007763:201336103"]},{"pricing":"62.00","discount":"49.60","combinedAttributes":["14:366","1328:200660824","200007763:201336103"]},{"pricing":"62.50","discount":"50.00","combinedAttributes":["14:366","1328:200660823","200007763:201336103"]},{"pricing":"61.00","discount":"48.80","combinedAttributes":["14:350853","1328:200660824","200007763:201336103"]},{"pricing":"61.25","discount":"49.00","combinedAttributes":["14:350853","1328:200660823","200007763:201336103"]}],"properties":[{"propertyTitle":"Nominal Capacity","propertyDescription":"None"},{"propertyTitle":"Monitoring Function Of Smoking Number","propertyDescription":"No"},{"propertyTitle":"Built-in Or External Battery","propertyDescription":"External"},{"propertyTitle":"Atomizers Identification Function","propertyDescription":"Yes"},{"propertyTitle":"Model Number","propertyDescription":"Vaporesso SWAG Kit"},{"propertyTitle":"Compatible Battery","propertyDescription":"18650"},{"propertyTitle":"USB Charger","propertyDescription":"Yes"},{"propertyTitle":"Appearance","propertyDescription":"Box Shape"},{"propertyTitle":"Temperature Control","propertyDescription":"Yes"},{"propertyTitle":"Overheating Protection Function","propertyDescription":"Yes"},{"propertyTitle":"Compatible Model","propertyDescription":"Vaporesso SWAG Kit"},{"propertyTitle":"Firmware Upgradeable","propertyDescription":"Yes"},{"propertyTitle":"TCR Adjustment Modes","propertyDescription":"Yes"},{"propertyTitle":"Brand Name","propertyDescription":"vaporesso"},{"propertyTitle":"Display screen","propertyDescription":"Yes"},{"propertyTitle":"Type","propertyDescription":"Electric Mod"},{"propertyTitle":"Short-circuit Protection Function","propertyDescription":"Yes"},{"propertyTitle":"Material","propertyDescription":"Metal"},{"propertyTitle":"Silicone Case","propertyDescription":"No"},{"propertyTitle":"Low Voltage Alarm Function","propertyDescription":"Yes"},{"propertyTitle":"Mod","propertyDescription":"Vaporesso Swag Mod"},{"propertyTitle":"Vaporesso Swag Tank 1","propertyDescription":"Vaporesso NRG SE Tank"},{"propertyTitle":"Vaporesso Swag Tank 2","propertyDescription":"Vaporesso NRG SE Mini Tank"},{"propertyTitle":"Vaporesso Swag Coil 1 ","propertyDescription":"Vaporesso GT2 0.4ohm"},{"propertyTitle":"Vaporesso Swag Coil 2","propertyDescription":"Vaporesso GT CCELL 0.5ohm"},{"propertyTitle":"Voltage Range","propertyDescription":"0-8.5V"},{"propertyTitle":"Battery","propertyDescription":"1*18650 battery (Not included)"},{"propertyTitle":"Power","propertyDescription":"5-80W"},{"propertyTitle":"Output Modes","propertyDescription":"VW, CCW, CCT, VT, TCR, RTC, BYPASS"}],"description":" \n<p> Original Vaporesso SWAG Kit 80W Electronic Cigarette Kits With Vaporesso Swag Mod NRG SE NRG SE Mini Tank E-Cigarettes Vape Kit&#xA0; </p> \n<p> <img alt=\"SWAG-KIT\" src=\"https://ae01.alicdn.com/kf/HTB1fTESXbZnBKNjSZFrq6yRLFXaj.jpg\"><img alt=\"SWAG-KIT-7\" src=\"https://ae01.alicdn.com/kf/HTB1tHCPX_lYBeNjSszcq6zwhFXan.jpg\"><img alt=\"SWAG-KIT-1\" src=\"https://ae01.alicdn.com/kf/HTB1DHuPX_lYBeNjSszcq6zwhFXap.jpg\"><img alt=\"SWAG-KIT-2\" src=\"https://ae01.alicdn.com/kf/HTB1cT3PXf6TBKNjSZJiq6zKVFXa1.jpg\"><img alt=\"SWAG-KIT-3\" src=\"https://ae01.alicdn.com/kf/HTB1tX.UXXooBKNjSZFPq6xa2XXaO.jpg\"><img alt=\"SWAG-KIT-6\" src=\"https://ae01.alicdn.com/kf/HTB1VSw8XH1YBuNjSszeq6yblFXa9.jpg\"><img alt=\"SWAG-KIT-6-(2)\" src=\"https://ae01.alicdn.com/kf/HTB1bd3RXbZnBKNjSZFGq6zt3FXao.jpg\"></p>"}
```

### Development

Want to contribute, folks? Great! PRs are welcome!

### Todos

 - Fix known bugs
 - Make some improvements/optimizations

### Try on Runkit

[![Try aliexscrape on RunKit](https://badge.runkitcdn.com/aliexscrape.svg)](https://npm.runkit.com/aliexscrape)

License
----

MIT
