import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
