import { render, screen } from '@testing-library/react';
import { Featured } from '../Featured';

test('Featured section heading renders correctly', () => {
	render(
		<Featured
			id="string"
			image="string"
			title="string"
			firstParagraph="string"
			author="string"
			date="string"
			// eslint-disable-next-line comma-dangle
		/>
	);

	const heading = screen.getByRole('heading', {
		name: /string/i,
	});

	expect(heading).toBeInTheDocument();
});
