import React from 'react';
import Masonry from 'react-masonry-css';
import { UseInfiniteScroll } from '../../lib/useInfiniteScroll';
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
		<Masonry
			breakpointCols={3}
			className="masonry-grid"
			columnClassName="masonry-grid_column"
		>
			{posts.map((post) => (
				<BlogPreviewCard post={post} key={post.id} />
			))}
		</Masonry>
	);
};
