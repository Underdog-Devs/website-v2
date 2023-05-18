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
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const author = context.params?.author as string;

	const result = await prisma.blog.findMany({
		take: 6,
		where: {
			author: {
				name: author,
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
	});
	return {
		props: {
			posts: result.map((post) => ({
				...post,
				date: post.date.toISOString(),
				author: post.author.name,
			})),
			postAuthor: author,
		},
	};
};

const Blog = (props: HomeProps) => {
	const { posts, postAuthor } = props;

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
			<Loader
				isLoading={isLoading}
				isLastPage={isLastPage}
				loadMoreCallback={loadMoreCallback}
			/>
		</div>
	);
};

export default Blog;
