import { Component } from 'react';
import Movie from './movie';

export default class Movies extends Component {
  render() {
    return this.props.movies.map((movie, i) => {
      return <Movie key={i} title={movie.title} overview={movie.overview} popularity={movie.popularity} />;
    });
  }
}
