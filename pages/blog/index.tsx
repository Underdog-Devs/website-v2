import React from 'react';
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
	text: string;
	author: string;
	date: string;
	name: string;
	entry: any;
}

export interface HomeProps {
	posts: BlogPost[];
}

export async function getServerSideProps() {
	const result = await prisma.blog.findMany({
		take: 6,
		orderBy: [
			{
				date: 'desc',
			},
		],
	});
	return {
		props: {
			posts: result.map((post) => ({
				...post,
				date: post.date.toISOString(),
			})),
		},
	};
}

export const Blog = (props: HomeProps) => {
	const { posts } = props;
	console.log(posts);
	const {
		isLoading,
		loadMoreCallback,
		hasDynamicPosts,
		dynamicPosts,
		isLastPage,
	} = useInfiniteScroll(posts);

	return (
		<div className={styles.container}>
			<Featured
				image="/images/collab.jpg"
				id="1337"
				title="Future of Work"
				author="Johanna Murry"
				text="Majority of peole will work in jobs that don’t exist today."
				date="02 May"
			/>
			<BlogPosts
				posts={hasDynamicPosts ? dynamicPosts : posts}
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
