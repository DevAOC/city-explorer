import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Movies extends Component {
  render() {
    return this.props.movies.map((movie) => {
      return (
        <>
          <Card style={{ padding: '10px', width: '75%', margin: 'auto', marginTop: '15px', marginBottom: '15px' }}>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>Overview: {movie.overview}</Card.Text>
            <Card.Text>Popularity: {movie.popularity}</Card.Text>
            <Card.Text>Release Date: {movie.releasedOn}</Card.Text>
          </Card>
        </>
      );
    });
  }
}
