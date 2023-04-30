import React, { Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar />
                <div className="container-fluid">
                    <Routes>
                        <Route path="home" element={<Home />}/>
                        <Route path="login" element={<Login />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;

