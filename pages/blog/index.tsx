import React from 'react';
import { BlogPreviewCard, Featured } from '../../components/blog';
import styles from './index.module.scss';

export const Blog = () => {
	return (
		<div className={styles.container}>
			<Featured img="/images/collab.jpg" id="1337" title="Future of Work" author="Johanna Murry" text="Majority of peole will work in jobs that don’t exist today." date="02 May" />
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, gridTemplateRows: 'masonry' }}>
				{[0, 1, 2, 3, 4, 5, 6].map((count) => {
					return (
						<BlogPreviewCard key={count} img="/images/collab.jpg" id="1337" title="Future of Work" author="Johanna Murry" text="Majority of peole will work in jobs that don’t exist today." date="02 May" />
					);
				})}
			</div>
			<button>More Posts</button>
		</div>
	);
};

export default Blog;
