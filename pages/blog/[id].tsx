import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import Image from 'next/image';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import BulletList from '@tiptap/extension-bullet-list';
import Typography from '@tiptap/extension-typography';
import CodeBlock from '@tiptap/extension-code-block';
import Blockquote from '@tiptap/extension-blockquote';
import { Image as TipTapImage } from '@tiptap/extension-image';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import TextAlign from '@tiptap/extension-text-align';
import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';
import styles from './blog.module.scss';

type Props = {
	id: string;
  entry: any;
  date: string;
  title: string;
  image: string;
  author: string;
};

export const Blog = (props: Props) => {
	const { id, entry, author, title, date, image } = props;
	const displayDate = date.substring(0, 10);
	const editor = useEditor({
		editable: false,
		content: entry,
		extensions: [
			StarterKit,
			Highlight,
			Typography,
			TipTapImage,
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
	const text = (postTitle:string, postId:string) => {
		return `${postTitle} \n
		http://www.underdogdevs.org/blog/${postId}
		`;
	};
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h3>{title}</h3>

				<ul className={styles.socialContainer}>
					<p>Share</p>
					<li>

						<a
							href={`https://twitter.com/intent/tweet?text=${text(title, id)}`}
						>
							<BsTwitter style={{ color: '#1D9BF0', cursor: 'pointer' }} />
						</a>
					</li>
					<li>
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=http://www.underdogdevs.org/blog/${id}`}
						>
							<BsFacebook style={{ color: '#1B74E4', cursor: 'pointer' }} />
						</a>
					</li>
					<li>
						<a
							href={`https://www.linkedin.com/shareArticle?mini=true&url=http://www.underdogdevs.org/blog/${id}`}
						>
							<BsLinkedin style={{ color: '#0A66C2', cursor: 'pointer' }} />
						</a>
					</li>
				</ul>
			</header>
			{image ? (
				<img className={styles.img} src={image} alt="Featured" loading="lazy" />
			) : (
				<Image src="/images/fallback.png" height="230" width="320" />
			)}
			<EditorContent className={styles.blogText} editor={editor} />

			<div className={styles.blogMain}>
				<section className={styles.blogInfo}>
					<div className={styles.blogAuthor}>
						<p className={styles.blogAuthorName}>Written by {author}</p>
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
			author: post?.author.name,
		},
	};
};

export default Blog;
