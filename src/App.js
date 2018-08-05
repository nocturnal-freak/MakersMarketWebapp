import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppComponent from './components/AppComponent';

import './App.css';

class App extends Component {
	render() {
    	return (
			<div>
				<Router>
					<AppComponent />
				</Router>
			</div>
		);
  	}
}

export default App;