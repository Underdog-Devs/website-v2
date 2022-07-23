import React from 'react';
import { BlogPreviewCard, Featured } from '../../components/blog';

export const Blog = () => {
	return (
		<div style={{ maxWidth: 1000, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto' }}>
			<Featured />
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 25, gridTemplateRows: 'masonry', marginBottom: 100 }}>
				{[0, 1, 2, 3, 4, 5, 6].map((count) => {
					return (
						<BlogPreviewCard key={count} />
					);
				})}
			</div>
		</div>
	);
};

export default Blog;
