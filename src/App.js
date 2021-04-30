import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import Price from './Components/Price.js';
import Volume from './Components/Volume.js';
import Market from './Market.js';

import Vol from './Vol.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Market />
				<div className="price">
					<Price />
				</div>
				<div className="volume">
					<Volume value={0} />
					<Vol />
				</div>
			</div>
		);
	}
}

export default App;
