import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Weather extends Component {
  render() {
    return this.props.weather.map((date) => {
      return (
        <>
          <Card style={{ padding: '10px', width: '75%', margin: 'auto', marginTop: '15px', marginBottom: '15px' }}>
            <Card.Text>Date: {date.date}</Card.Text>
            <Card.Text>Description: {date.description}</Card.Text>
          </Card>
        </>
      );
    });
  }
}
