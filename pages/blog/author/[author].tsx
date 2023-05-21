import React from 'react';
import { GetServerSideProps } from 'next/types';
import { Featured } from '../../../components/blog';
import { BlogPosts } from '../../../components/blog/BlogPosts';
import { Loader } from '../../../components/blog/Loader';
import { useInfiniteScroll } from '../../../lib/useInfiniteScroll';
import prisma from '../../../lib/prisma';
import styles from '../index.module.scss';

export interface BlogPost {
  id: string;
  image: string;
  title: string;
  firstParagraph: string;
  text: string;
  author: string;
  date: string;
  name: string;
  entry: any;
}

export interface HomeProps {
  posts: BlogPost[];
  postAuthor: string;
  count: number;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const author = context.params?.author as string;
	const name = author.replace(/-/g, ' ');
	const response = await prisma.$transaction([
		prisma.blog.count({
			where: {
				author: {
					name,
				},
			},
		}),
		prisma.blog.findMany({
			take: 6,
			where: {
				author: {
					name,
				},
			},
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
				author: post.author.name,
			})),
			postAuthor: name,
		},
	};
};

export const Blog = (props: HomeProps) => {
	const { count, posts, postAuthor } = props;
	console.log(count);
	const {
		isLoading,
		loadMoreCallback,
		hasDynamicPosts,
		dynamicPosts,
		isLastPage,
	} = useInfiniteScroll(posts, postAuthor);

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
				posts={hasDynamicPosts ? dynamicPosts.slice(1, dynamicPosts.length) : firstPosts}
				isLoading={isLoading}
				loadMoreCallback={loadMoreCallback}
				isLastPage={isLastPage}
			/>
			{count > 6 ?(
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
