import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
