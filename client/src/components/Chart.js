import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';


const CustomizedXAxisTick = React.createClass(
  {
    render () {
      const {x, y, stroke, payload} = this.props;
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666"
                transform="rotate(-35)">{payload.value}</text>
        </g>
      );
    }
  });

const CustomizedYAxisTick = React.createClass(
  {
    render () {
      const {x, y, stroke, payload} = this.props;
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={0} textAnchor="end" fill="#666">{payload.value.toFixed(1)}</text>
        </g>
      );
    }
  });

class Chart extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return <LineChart width={730} height={250} data={this.props.data}>
      <XAxis height={100} dataKey="time" tick={<CustomizedXAxisTick/>}/>
      <YAxis type="number" allowDecimals={false} tick={<CustomizedYAxisTick/>} domain={['dataMin', 'dataMax']}/>
      <Tooltip />
      <Line type="step" dataKey="usd" dot={false} activeDot={true} stroke="#82ca9d"/>
    </LineChart>
  }
}

export default Chart;
