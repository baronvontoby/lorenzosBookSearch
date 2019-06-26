import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Books from './pages/Books';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Route exact path='/' component={Books}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
