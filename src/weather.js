import { Component } from 'react';
import WeatherDay from './weatherDay';

export default class Weather extends Component {
  render() {
    return this.props.weather.map((date, i) => {
      return <WeatherDay key={i} date={date.date} description={date.description} />;
    });
  }
}
