import React from 'react';
import { UseInfiniteScroll } from '../../lib/useInfiniteScroll';
import styles from './blogPreviewCard.module.scss';
import { BlogPreviewCard } from './BlogPreviewCard';

type BlogPostsProps = Pick<
	UseInfiniteScroll,
	'isLoading' | 'loadMoreCallback' | 'isLastPage'
> & {
	posts: BlogPost[];
};

interface BlogPost{
	id: string;
	image: string;
	title: string;
	name: string;
	text: string;
	author: string;
	date: string;
	entry: any;
}

export const BlogPosts = ({
	posts,
	// isLoading,
	// loadMoreCallback,
	// isLastPage,
}: BlogPostsProps) => {
	return (
		<main
			style={{
				display: 'grid',
				gap: 30,
				gridTemplateRows: 'masonry',
				gridTemplateColumns:
					'fit-content(33%) fit-content(33%) fit-content(33%)',
			}}
		>
			{posts.map((post) => (
				<div className={styles.container}>
					<BlogPreviewCard post={post} />
				</div>
			))}
		</main>
	);
};
