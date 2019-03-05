import React from 'react';

const Display = props => {
	return (
		<div>
			<h2>Display</h2>
			<h3 data-testid="stats">Balls: {props.ball}</h3>
			<h3 data-testid="stats">Strikes: {props.strike}</h3>
			<h3 data-testid="stats">Hits: {props.hit}</h3>
			<h3 data-testid="stats">Fouls: {props.foul}</h3>
		</div>
	);
};

export default Display;
