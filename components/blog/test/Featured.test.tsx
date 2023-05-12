import { render, screen } from '@testing-library/react';
import { Featured } from '../Featured';

describe('Functional test of the Featured component', () => {
	it('Featured component renders correctly', () => {
		render(
			<Featured
				id="123"
				image=""
				title="Blog title"
				firstParagraph="Lorem ipsum dolor sit amet, consectetur"
				author="anonymous"
				date="05/12/2023"
				// eslint-disable-next-line comma-dangle
			/>
		);

		const heading = screen.getByRole('heading', {
			name: /Blog title/i,
		});
		const paragraph = screen.getByText(
			// eslint-disable-next-line comma-dangle
			/lorem ipsum dolor sit amet, consectetur/i
		);
		const author = screen.getByText(/anonymous/i);
		const date = screen.getByText(/5\/12\/2023/i);
		const image = screen.getByRole('img', {
			name: /underdog devs logo/i,
		});

		expect(heading).toBeInTheDocument();
		expect(paragraph).toBeInTheDocument();
		expect(author).toBeInTheDocument();
		expect(date).toBeInTheDocument();
		expect(image).toBeInTheDocument();
	});
});
