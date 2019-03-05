import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Display from './components/display/Display';
import Players from './components/players/Players';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Players />
				<Display />
				<Dashboard />
			</div>
		);
	}
}

export default App;
