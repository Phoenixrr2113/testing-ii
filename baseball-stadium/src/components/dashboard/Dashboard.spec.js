import React from 'react';
import { render } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard', () => {
	it('Should render 4 buttons', () => {
		const { getAllByTestId } = render(<Dashboard />);

		const btnNames = getAllByTestId('dashboard-btn').map(
			btn => btn.textContent,
		);

		expect(btnNames).toHaveLength(btnNames.length);
	});
});
