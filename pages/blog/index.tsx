import React from 'react';
import { Content } from '@tiptap/react';
import { Featured } from '../../components/blog';
import { BlogPosts } from '../../components/blog/BlogPosts';
import { Loader } from '../../components/blog/Loader';
import { useInfiniteScroll } from '../../lib/useInfiniteScroll';
import prisma from '../../lib/prisma';
import styles from './index.module.scss';

export interface BlogPost {
  id: string;
  image: string;
  title: string;
  firstParagraph: string;
  text: string;
  author: string;
  date: string;
  name: string;
  entry: Content;
}

export interface HomeProps {
  posts: BlogPost[];
  count: number;
}

export async function getServerSideProps() {
	const response = await prisma.$transaction([
		prisma.blog.count(),
		prisma.blog.findMany({
			take: 6,
			orderBy: [
				{
					date: 'desc',
				},
			],
			include: {
				author: {
					select: {
						name: true,
					},
				},
			},
		}),
	]);

	return {
		props: {
			count: response[0],
			posts: response[1].map((post: any) => ({
				...post,
				date: post.date.toISOString(),
				author: post.author.name || 'UD Admin',
			})),
		},
	};
}

export const Blog = (props: HomeProps) => {
	const { count, posts } = props;

	const {
		isLoading,
		loadMoreCallback,
		hasDynamicPosts,
		dynamicPosts,
		isLastPage,
	} = useInfiniteScroll(posts, null);

	const firstPosts = posts.slice(1, posts.length);

	return (
		<div className={styles.container}>
			<Featured
				image={posts[0].image}
				id={posts[0].id}
				title={posts[0].title}
				firstParagraph={posts[0].firstParagraph}
				author={posts[0].author}
				date={posts[0].date}
			/>
			<BlogPosts
				posts={
					hasDynamicPosts
						? dynamicPosts.slice(1, dynamicPosts.length)
						: firstPosts
				}
				isLoading={isLoading}
				loadMoreCallback={loadMoreCallback}
				isLastPage={isLastPage}
			/>
			{count > 6 ? (
				<Loader
					isLoading={isLoading}
					isLastPage={isLastPage}
					loadMoreCallback={loadMoreCallback}
				/>
			) : null}
		</div>
	);
};

export default Blog;
