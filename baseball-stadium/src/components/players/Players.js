import React, { Component } from 'react';

class Players extends Component {
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
			<div>
				<div>
					<h2>Players</h2>
					<div>
						{this.state.players.map(player => (
							<div key={player.id}>{player.name}</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default Players;
