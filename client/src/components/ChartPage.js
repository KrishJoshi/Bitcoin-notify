import React, {Component} from 'react';
import Chart from './Chart';
import {getDataUntil} from '../util/api'


class ChartPage extends Component {
  constructor() {
    super();
    this.state = {
      price: []
    };
  }

  componentDidMount() {
    getDataUntil(this.props.match.params.days).then(data => this.setState({price: data}))
  }


  render() {
    return <Chart data={this.state.price}/>
  }
}

export default ChartPage;
