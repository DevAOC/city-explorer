import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <>
        <h1
          style={{
            paddingLeft: '10px',
            paddingTop: '25px',
            height: '100px',
            marginBottom: '25px',
            backgroundColor: '#337CAD',
          }}
        >
          CE
        </h1>
      </>
    );
  }
}
