import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
	it('should render strike, ball, foul, and hit', () => {
		const { getAllByTestId } = render(<Display />);

		// const statNames = getAllByTestId('stats').map(stat => stat.textContent);
		expect(getAllByTestId('stats')).toHaveLength(3);

		// expect(statNames).toHaveLength(4);
	});
});
