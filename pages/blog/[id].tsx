import React, { useMemo } from 'react';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import { generateHTML } from '@tiptap/html';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';
import Text from '@tiptap/extension-text';
import prisma from '../../lib/prisma';
import styles from './blog.module.scss';

type Props = {
	entry: any;
}

export const Blog = (props: Props) => {
	const { entry } = props;
	const output = useMemo(() => {
		return generateHTML(entry, [
			Document,
			Paragraph,
			Heading.configure({
				levels: [1, 2, 3],
			}),
			Text,
			// Bold,
			// other extensions …
		]);
	}, [entry]);
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h3>Lorem ipsum dolor sit amet vorit consectetur...</h3>

				<ul className={styles.socialContainer}>
					<p>Share</p>
					<li>
						<BsTwitter />
					</li>
					<li>
						<BsFacebook />
					</li>
					<li>
						<BsLinkedin />
					</li>
					<li>
						<BsInstagram />
					</li>
				</ul>

				<pre>
					<code><div dangerouslySetInnerHTML={{ __html: output }} /></code>
				</pre>
			</header>

			<div className={styles.blogMain}>
				<section className={styles.blogInfo}>
					<div className={styles.blogAuthor}>
						<p className={styles.blogAuthorName}>Viola Manisa</p>
						<p className={styles.blogAuthorTitle}>☑ Verified writer</p>
					</div>
					<p>PUBLISHED ON MAY, 2 2019</p>
				</section>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context.params?.id as string;
	const post = await prisma.blog.findUnique({
		where: {
			id,
		},
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
			...post,
			date: post?.date.toISOString(),
		},
	};
};

export default Blog;
