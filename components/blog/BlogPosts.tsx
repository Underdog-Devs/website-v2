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

interface BlogPost {
	id: string;
	image: string;
	title: string;
	firstParagraph: string;
	text: string;
	author: string;
	date: string;
	entry: any;
}

export const BlogPosts = ({
	posts,
}: // isLoading,
// loadMoreCallback,
// isLastPage,
BlogPostsProps) => {
	return (
		<main className={styles.main}>
			{posts.map((post) => (
				<BlogPreviewCard post={post} />
			))}
		</main>
	);
};
