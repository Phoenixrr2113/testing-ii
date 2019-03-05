import React from 'react';

const Dashboard = props => {
	return (
		<div>
			<h2>Dashboard</h2>
			<div>
				<button
					name="strike"
					value={props.strike}
					onClick={props.handleClick}
					data-testid="dashboard-btn">
					Strike
				</button>
				<button
					name="ball"
					value={props.ball}
					onClick={props.handleClick}
					data-testid="dashboard-btn">
					Ball
				</button>
				<button
					name="foul"
					value={props.foul}
					onClick={props.handleClick}
					data-testid="dashboard-btn">
					Foul
				</button>
				<button
					name="hit"
					value={props.hit}
					onClick={props.handleClick}
					data-testid="dashboard-btn">
					Hit
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
