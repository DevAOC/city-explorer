import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class WeatherDay extends Component {
  render() {
    return (
      <>
        <Card style={{ padding: '10px', width: '85%', margin: 'auto', marginTop: '15px', marginBottom: '15px' }}>
          <Card.Text>Date: {this.props.date}</Card.Text>
          <Card.Text>Description: {this.props.description}</Card.Text>
        </Card>
      </>
    );
  }
}
