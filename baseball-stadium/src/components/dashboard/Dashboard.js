import React from 'react';

const Dashboard = () => {
	return (
		<div>
			<h2>Dashboard</h2>
			<div>
				<button data-testid="dashboard-btn">Strike</button>
				<button data-testid="dashboard-btn">Ball</button>
				<button data-testid="dashboard-btn">Foul</button>
				<button data-testid="dashboard-btn">Hit</button>
			</div>
		</div>
	);
};

export default Dashboard;
