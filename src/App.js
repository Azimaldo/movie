import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const data = require('./data.json');


class App extends Component {
  render() {
    return (
        <div>
            <Sidebar/>
            <Header />
            <div className="container-right">
                {data.movies.map(
                    show => <Movies show={show}/>
                )}
            </div>
            <Footer/>
        </div>
    )
  }
}

export default App;
