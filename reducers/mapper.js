import {sortBy} from 'lodash';

export default class Mapper {
  constructor(serverDto) {
    this.data = serverDto;
    return this;
  }

  getLowestPrice() {
    return sortBy(this.data, 'usd')[0];
  }
}
