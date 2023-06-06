import { render, screen } from '@testing-library/react';
import { Featured } from './Featured';
import type { Props } from './FeaturedProps';

describe('Featured', () => {
	let testProps: Props;

	beforeEach(() => {
		testProps = {
			id: '123',
			image: '',
			title: 'Blog title',
			firstParagraph: 'Lorem ipsum dolor sit amet, consectetur',
			author: 'anonymous',
			date: '05/12/2023',
		};
	});

	it('Renders Featured', () => {
		render(<Featured {...testProps} />);
		expect(
			screen.getByRole('heading', { name: /Blog title/i }),
		).toBeInTheDocument();
	});

	it('Should display author name', () => {
		render(<Featured {...testProps} />);
		const { author } = testProps;

		expect(screen.getByText(author)).toBeInTheDocument();
	});

	it('Should display date of the article', () => {
		testProps = { ...testProps, date: '05/12/2023' };
		render(<Featured {...testProps} />);

		expect(screen.getByText(/5\/12\/2023/i)).toBeInTheDocument();
	});

	it('Should render the blog text', () => {
		render(<Featured {...testProps} />);
		expect(
			screen.getByText(/lorem ipsum dolor sit amet, consectetur/i),
		).toBeInTheDocument();
	});

	it('Should render an image if one is linked to the post', () => {
		testProps = {
			...testProps,
			image:
				'https://ud-media.s3.us-east-2.amazonaws.com/media/1683337702044-resized-image.jpg',
		};
		render(<Featured {...testProps} />);
		expect(
			screen.getByRole('img', {
				name: /featured/i,
			}),
		).toBeInTheDocument();
	});

	it('Should render a placeholder image when an image is not provided', () => {
		render(<Featured {...testProps} />);
		expect(
			screen.getByRole('img', {
				name: /underdog devs logo/i,
			}),
		).toBeInTheDocument();
	});

	it('Should render a read more link with the correct href', () => {
		render(<Featured {...testProps} />);
		const { title, id } = testProps;

		const url = `/blog/${title
			.replace(/\s+/g, '-')
			.replace(/[^a-zA-Z0-9\s-]/g, '')}/${id}`;

		const linkElement = screen.getByRole('link', { name: /read more\.\.\./i });
		expect(linkElement).toHaveAttribute('href', url);
	});

	it('Should render a link in the header with the correct href', () => {
		render(<Featured {...testProps} />);
		const { title, id } = testProps;

		const url = `/blog/${title
			.replace(/\s+/g, '-')
			.replace(/[^a-zA-Z0-9\s-]/g, '')}/${id}`;

		const linkElement = screen.getByRole('link', { name: title });
		expect(linkElement).toHaveAttribute('href', url);
	});
});