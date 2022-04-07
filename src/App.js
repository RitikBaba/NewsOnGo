import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import New from './Components/New';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class  extends Component {
  C = 'John'
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/about" element ={<New key="general"pageSize={8} country="in" category="general"/>}/>
          <Route exact path="/business" element ={<New key="business"pageSize={8} country="in" category="business"/>
 }/>         <Route exact path="/entertainment" element ={<New key="entertainment"pageSize={8} country="in" category="entertainment"/>}/>
          <Route exact path="/health" element ={<New key="health"pageSize={8} country="in" category="health"/>
 }/>         <Route exact path="/science" element ={<New key="science"pageSize={8} country="in" category="science"/>
 }/>         <Route exact path="/sports" element ={<New key="sports"pageSize={8} country="in" category="sports"/>
 }/>         <Route exact path="/technology" element ={<New key="technology"pageSize={8} country="in" category="technology"/>
 }/>       </Routes>
        </Router>
      </>
    )
  }
}

