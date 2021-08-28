import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class LocationData extends Component {
  render() {
    return (
      <>
        <Card.Body>
          <Card.Title>{this.props.city}</Card.Title>
          <Card.Text>Lattitude: {this.props.lat}</Card.Text>
          <Card.Text>Longitude: {this.props.lon}</Card.Text>
        </Card.Body>
      </>
    );
  }
}
