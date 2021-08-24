import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

export default class CityForm extends Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.submitFormHandler}>
          <FloatingLabel controlId="floatingInput" label="City">
            <Form.Control type="text" placeholder="City" name="searchQuery" style={{ width: '30%' }} />
          </FloatingLabel>
          <Button variant="primary" type="submit" style={{ width: '30%' }}>
            Explore!
          </Button>
        </Form>
      </>
    );
  }
}
