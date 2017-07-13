import onBtcPriceChange from './apis/onBtcPriceChange';
import {getLowestFromDays} from './apis/api'
import notifier from 'node-notifier';

let lastPrice = 0;
let lastLowestPrice = 0;
let lowestInWeek = 0;
let lowestInTwoWeeks = 0;
let lowestInFourWeeks = 0;

getLowestFromDays(7).then(price => lowestInWeek = price);
getLowestFromDays(14).then(price => lowestInTwoWeeks = price);
getLowestFromDays(28).then(price => lowestInFourWeeks = price);


new onBtcPriceChange(newPrice => {
  if (lastPrice !== newPrice.price) {
    let price = newPrice.price;

    console.log(price, lowestInWeek.usd, lowestInTwoWeeks.usd, lowestInFourWeeks.usd);

    if (price > (lastPrice + lastPrice * 0.02) || (price < (lastPrice - lastPrice * 0.02))) {
      notifier.notify({
                        title: 'New Price Alert',
                        message: '$' + price
                      });
    }

    console.log(price < lastLowestPrice);
    if (price < lastLowestPrice || lastLowestPrice === 0) {
      lastLowestPrice = price;
      notifier.notify({
                        title: 'New Lowest Price',
                        message: '$' + price
                      });
    }


    lastPrice = price;
  }
});
