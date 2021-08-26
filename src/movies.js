import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Movie from './movie';

export default class Movies extends Component {
  render() {
    return this.props.movies.map((movie) => {
      return (
        <>
          <Card style={{ width: '600px', margin: 'auto', marginBottom: '25px', marginTop: '25px', padding: '10px' }}>
            <Card.Title>Movies</Card.Title>
            <Movie title={movie.title} overview={movie.overview} popularity={movie.popularity} />
          </Card>
        </>
      );
    });
  }
}
