import React from 'react';

const Players = props => {
	return (
		<div>
			<div>
				<h2>Players</h2>
				<div>
					{props.players.map(player => (
						<div key={player.id}>{player.name}</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Players;
