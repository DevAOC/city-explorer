import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CityForm from './cityForm';
import CityMap from './cityMap';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      map: '',
    };
  }

  submitFormHandler = async (event) => {
    event.preventDefault();
    const city = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${event.target.searchQuery.value}&format=json`
    );
    this.setState({
      location: city.data[0],
      map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${city.data[0].lat},${city.data[0].lon}&zoom=13`,
    });
  };

  render() {
    return (
      <>
        <CityForm submitFormHandler={this.submitFormHandler} />
        {this.state.map && (
          <>
            <Card>
              <Card.Img src={this.state.map} alt={this.state.location.display_name} style={{ width: '600px' }} />
              <Card.Body>
                <Card.Title>{this.state.location.display_name}</Card.Title>
                <Card.Text>Lattitude: {this.state.location.lat}</Card.Text>
                <Card.Text>Longitude: {this.state.location.lon}</Card.Text>
              </Card.Body>
            </Card>
          </>
        )}
        <CityMap />
      </>
    );
  }
}
