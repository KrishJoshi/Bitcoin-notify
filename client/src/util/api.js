import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

export function getAllData() {
  return axios
    .get('/api//default')
    .then(price => price.data)
}


export function getDataUntil(days) {
  return axios
    .get('/api/days/' + days)
    .then(price => _.map(price.data, function(priceItem) {
                           return {
                             usd: Number.parseFloat(priceItem.usd),
                             time: moment(priceItem.time).format("Do MMMM, h:mm a")
                           }
                         }
    ))
}