import bitcoinity from "bitcoinity"
import Normaliser from "../reducers/normaliser";
import Mapper from "../reducers/Mapper";


function callApi(numOfDays) {
  return new Promise((res) => {
      bitcoinity.getCSV({
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
        },
        (err, csvData) => {
          if (err) {
            console.log("Encountered a download error. Exiting.");
            throw err;
          }

          const normalisedData = new Normaliser(bitcoinity.parseCSV(csvData)); // Parses data into an array of objects

          res(normalisedData);
        })
    }
  );
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
