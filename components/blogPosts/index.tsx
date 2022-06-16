import React from 'react';
import { BlogPreviewCard, Featured } from '../blog';
import styles from './blog.module.scss';

const BlogPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.featured}>
				<Featured
					img="/images/collab.jpg"
					title="Lorem Ipsum"
					text="Some dummy text some dummy text"
					author="Jess B"
					date="06/15/2022"
				/>
			</div>
			<div className={styles.previewCards}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
					return (
						<div key={index}>
							<BlogPreviewCard
								img="/images/collab.jpg"
								title="Lorem Ipsum"
								text="Some dummy text some dummy text"
								author="Jess B"
								date="06/15/2022"
							/>
						</div>
					);
				})}
			</div>
			<button className={styles.button}>View More</button>
		</div>

	);
};

export default BlogPage;
