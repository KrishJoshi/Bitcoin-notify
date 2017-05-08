export default class Normaliser {
  constructor(serverDto) {
    return this.normalise(serverDto);
  }

  normalise(data) {
    return data.rows.map(row => {
        return {
          time: row.Time,
          usd: row.avg
        }
      }
    );
  }
}
