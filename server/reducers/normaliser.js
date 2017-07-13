export default class Normaliser {
  constructor(serverDto) {
    return this.normalise(serverDto.data[0]);
  }

  normalise(data) {
    return data.values.map(row => {
                             return {
                               time: new Date(row[0]),
                               usd: row[1]
                             }
                           }
    );
  }
}
