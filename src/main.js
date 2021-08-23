import { Component } from 'react';
import axios from 'axios';
import CityForm from './cityForm';
import CityMap from './cityMap';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  submitFormHandler = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${event.target.searchQuery.value}&format=json`
    );
    this.setState({
      location: response.data[0],
    });
  };

  render() {
    return (
      <>
        <CityForm submitFormHandler={this.submitFormHandler} />
        {this.state.location.display_name && (
          <div>
            <h2>The city: {this.state.location.display_name}</h2>
            <p>Lattitude: {this.state.location.lat}</p>
            <p>Longitude: {this.state.location.lon}</p>
          </div>
        )}
        <CityMap />
      </>
    );
  }
}
