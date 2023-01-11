import React from 'react';
import { GetServerSideProps } from 'next';
import { BlogPreviewCard, Featured } from '../../components/blog';
import styles from './index.module.scss';
import prisma from '../../lib/prisma';
// TODO: Create an interface file
// TODO: Create an interface for Entry
type Props = {
	posts: Post[];
}
export interface Post {
	id: string;
	authorId: string;
	title: string;
	entry: any;
	date: Date;
}

export const Blog = (props: Props) => {
	const { posts } = props;
	return (
		<div className={styles.container}>
			<Featured
				img="/images/collab.jpg"
				id="1337"
				title="Future of Work"
				author="Johanna Murry"
				text="Majority of peole will work in jobs that don’t exist today."
				date="02 May"
			/>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 30,
					gridTemplateRows: 'masonry',
				}}
			>
				{posts.map((post) => {
					return (
						<BlogPreviewCard
							key={post.id}
							img="/images/collab.jpg"
							id={post.id}
							title={post.title}
							author="Johanna Murry"
							text={post.entry}
							date={post.date}
						/>
					);
				})}
			</div>
			<button>More Posts</button>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	// Fetch all posted jobs and include related items from Company table
	const posts = await prisma.blog.findMany({
		orderBy: [
			{
				date: 'desc',
			},
		],
	});
	console.log(posts);
	console.log(posts[0].entry);
	return {
		props: {
			posts: posts.map((post: Post) => ({
				...post,
				date: post.date.toISOString(),
			})),
		},
	};
};

export default Blog;
