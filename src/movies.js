import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Movies extends Component {
  render() {
    return this.props.movies.map((movie) => {
      return (
        <>
          <Card>
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
