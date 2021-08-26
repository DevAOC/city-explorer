import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import LocationData from './locationData';

export default class Location extends Component {
  render() {
    console.log(this.props.location);
    return (
      <>
        <Card style={{ width: '650px', margin: 'auto', marginTop: '25px', marginBottom: '25px' }}>
          <Card.Img src={this.props.mapURL} alt={''} style={{ width: '600px', margin: 'auto', marginTop: '25px' }} />
          <LocationData
            city={this.props.location.display_name}
            lat={this.props.location.lat}
            lon={this.props.location.lon}
          />
        </Card>
      </>
    );
  }
}
