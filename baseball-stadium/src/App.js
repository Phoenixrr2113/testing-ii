import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Display from './components/display/Display';
import Players from './components/players/Players';

class App extends Component {
	state = {
		players: [
			{ id: 1, name: 'Joe' },
			{ id: 2, name: 'Shaun' },
			{ id: 3, name: 'Paul' },
			{ id: 4, name: 'Ed' },
		],
		ball: 0,
		strike: 0,
		foul: 0,
		hit: 0,
	};

	handleClick = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: this.state[event.target.name] + 1,
		});
	};

	render() {
		return (
			<div className="App">
				<Players players={this.state.players} />
				<Display
					ball={this.state.ball}
					hit={this.state.hit}
					strike={this.state.strike}
					foul={this.state.foul}
				/>
				<Dashboard
					ball={this.state.ball}
					hit={this.state.hit}
					strike={this.state.strike}
					foul={this.state.foul}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}

export default App;
