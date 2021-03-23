import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'

import Price from "./Price.js";
import Volume from "./volume.js";


class App extends Component {

  render() {

    return (
      <>
        <div className="App" >
          <div className="price">
            <Price />
          </div>
          <div className="volume">
            <Volume value={0} />
          </div>
          </div>
      </>
    );
  }
}

export default App;