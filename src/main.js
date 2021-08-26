import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import CityForm from './cityForm';
import Weather from './weather';
import Movies from './movies';

const server = process.env.REACT_APP_PORT || 'http://localhost:3001';

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
      this.setState({
        errorMessage: '',
        location: city.data[0],
        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${city.data[0].lat},${city.data[0].lon}&zoom=12`,
      });
      // Just changed from local to server
      const weather = await axios.get(
        `${server}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`
      );
      this.setState({
        weather: weather.data,
      });
      const movies = await axios.get(`${server}/movies?searchQuery=${searchQuery}`);
      this.setState({
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
          this.state.map && (
            <>
              <Card style={{ width: '650px', margin: 'auto', marginTop: '25px', marginBottom: '25px' }}>
                <Card.Img
                  src={this.state.map}
                  alt={this.state.location.display_name}
                  style={{ width: '600px', margin: 'auto', marginTop: '25px' }}
                />
                <Card.Body>
                  <Card.Title>{this.state.location.display_name}</Card.Title>
                  <Card.Text>Lattitude: {this.state.location.lat}</Card.Text>
                  <Card.Text>Longitude: {this.state.location.lon}</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ padding: '10px', margin: 'auto', width: '450px' }}>
                <Card.Title>Weather</Card.Title>
                <Weather weather={this.state.weather} />
              </Card>
              <Card>
                <Card.Title>Movies</Card.Title>
                <Movies movies={this.state.movies} />
              </Card>
            </>
          )
        )}
      </>
    );
  }
}
