import axios from "axios"
import Normaliser from "../reducers/normaliser";
import Mapper from "../reducers/mapper";


function callApi(numOfDays) {
  return axios.post('https://data.bitcoinity.org/chart_data', {
    data_type: 'price',
    currency: 'USD',
    exchange: 'all',
    volume_unit: 'btc',
    timespan: numOfDays + 'd',
    groups_count: '10',
    resolution: 'hour',
    compare: 'no',
    chart_type: 'line',
    smoothing: 'linear',
    scale_type: 'lin',
  }).then(csvData => {
    return new Normaliser(csvData.data);
  })
}


function getLowestFromDays(numOfDays) {
  return callApi(numOfDays).then(normalisedData => {
    return new Mapper(normalisedData).getLowestPrice();
  });
}


function getDays(numOfDays) {
  return callApi(numOfDays)
}

function getAllData() {
  return callApi(30)
}

export {getAllData, getLowestFromDays, getDays};
