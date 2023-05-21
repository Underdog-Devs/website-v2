import React, { useEffect, useState } from 'react';
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
	const [screenWidth, setScreenWidth] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setScreenWidth(window.innerWidth);
			};

			window.addEventListener('resize', handleResize);

			// Initial screen width
			setScreenWidth(window.innerWidth);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	const setGridColumns = () => {
		if (screenWidth < 768) {
			return 1;
		} if (screenWidth < 992) {
			return 2;
		}
		return 3;
	};

	return (

		<Masonry
			breakpointCols={setGridColumns()}
			className="masonry-grid"
			columnClassName="masonry-grid_column"
		>

			{posts.map((post) => (
				<BlogPreviewCard post={post} key={post.id} />
			))}

		</Masonry>
	);
};
