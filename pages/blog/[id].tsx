import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import BulletList from '@tiptap/extension-bullet-list';
import Typography from '@tiptap/extension-typography';
import CodeBlock from '@tiptap/extension-code-block';
import Blockquote from '@tiptap/extension-blockquote';
import Image from '@tiptap/extension-image';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import TextAlign from '@tiptap/extension-text-align';

import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';
import styles from './blog.module.scss';

type Props = {
	entry: any;
	date: string;
	title: string;
	author: { name: string };
};

export const Blog = (props: Props) => {
	const { entry, author, title, date } = props;
	const name = author.name ? author.name : 'Name Holder';
	const displayDate = date.substring(0, 10);

	const editor = useEditor({
		editable: false,
		content: entry,
		extensions: [
			StarterKit,
			Highlight,
			Typography,
			Image,
			BulletList,
			OrderedList,
			CodeBlock,
			Blockquote,
			ListItem,
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
		],
	});

	if (!editor) {
		return null;
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h3>{title}</h3>

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
			</header>

			<EditorContent className={styles.blogText} editor={editor} />

			<div className={styles.blogMain}>
				<section className={styles.blogInfo}>
					<div className={styles.blogAuthor}>
						<p className={styles.blogAuthorName}>{name}</p>
						<p className={styles.blogAuthorTitle}>☑ Verified writer</p>
					</div>
					<p>PUBLISHED ON {displayDate}</p>
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
