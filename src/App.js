import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import New from './Components/New';

export default class  extends Component {
  C = 'John'
  render() {
    return (
      <>
        <Navbar/>
        <New/>
      </>
    )
  }
}

