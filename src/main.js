import { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

import CityForm from './cityForm';
import Location from './location';
import Weather from './weather';
import Movies from './movies';

const server = process.env.REACT_APP_BACKEND_URL;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      map: '',
      weather: [],
      movies: [],
      errorMessage: '',
    };
  }

  submitFormHandler = async (event) => {
    event.preventDefault();
    const searchQuery = event.target.searchQuery.value;
    try {
      const city = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${searchQuery}&format=json`
      );
      const weather = await axios.get(
        `${server}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`
      );
      const movies = await axios.get(`${server}/movies?searchQuery=${searchQuery}`);
      this.setState({
        errorMessage: '',
        location: city.data[0],
        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${city.data[0].lat},${city.data[0].lon}&zoom=12`,
        weather: weather.data,
        movies: movies.data,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        errorMessage: `${err}`,
      });
    }
  };

  render() {
    return (
      <>
        <CityForm submitFormHandler={this.submitFormHandler} />
        {this.state.errorMessage ? (
          <Alert>{this.state.errorMessage}</Alert>
        ) : (
          <>
            <Location location={this.state.location} mapURL={this.state.map} />
            <Weather weather={this.state.weather} />
            <Movies movies={this.state.movies} />
          </>
        )}
      </>
    );
  }
}
