import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		players: [
			{ id: 1, name: 'Joe' },
			{ id: 2, name: 'Shaun' },
			{ id: 3, name: 'Paul' },
			{ id: 4, name: 'Ed' },
		],
	};
	render() {
		return (
			<div className="App">
				<div>
					<h2>Players</h2>
					<div>
						{this.state.players.map(player => (
							<div key={player.id}>{player.name}</div>
						))}
					</div>
				</div>
				<div>
					<h2>Display</h2>
					<h3>Balls: 0</h3>
					<h3>Strikes: 0</h3>
				</div>
				<div>
					<h2>Dashboard</h2>
					<div>
						<button>Strike</button>
						<button>Ball</button>
						<button>Foul</button>
						<button>Hit</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
