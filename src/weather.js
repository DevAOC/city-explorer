import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import WeatherDay from './weatherDay';

export default class Weather extends Component {
  render() {
    return this.props.weather.map((date) => {
      return (
        <>
          <Card style={{ padding: '10px', margin: 'auto', width: '450px', marginTop: '25px', marginBottom: '25px' }}>
            <Card.Title>Weather</Card.Title>
            <WeatherDay date={date.date} description={date.description} />
          </Card>
        </>
      );
    });
  }
}
