import React, {Component} from 'react';
import Chart from './Chart';
import {getDataUntil} from '../util/api'


class BasePage extends Component {
  constructor() {
    super();
    this.state = {
      price: []
    };
  }

  componentDidMount() {
    getDataUntil(3).then(data => this.setState({price: data}))
  }


  render() {
    return <Chart data={this.state.price}/>
  }
}

export default BasePage;
