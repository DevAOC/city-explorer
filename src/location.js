import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import LocationData from './weatherDay';

export default class Location extends Component {
  render() {
    return (
      <>
        <Card style={{ width: '650px', margin: 'auto', marginTop: '25px', marginBottom: '25px' }}>
          <Card.Img src={this.props.map} alt={''} style={{ width: '600px', margin: 'auto', marginTop: '25px' }} />
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
