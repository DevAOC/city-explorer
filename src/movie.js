import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Movie extends Component {
  render() {
    return (
      <>
        <Card style={{ padding: '10px', width: '85%', margin: 'auto', marginTop: '15px', marginBottom: '15px' }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>Overview: {this.props.overview}</Card.Text>
          <Card.Text>Popularity: {this.props.popularity}</Card.Text>
        </Card>
      </>
    );
  }
}
