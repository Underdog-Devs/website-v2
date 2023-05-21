import React, { SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import { EditorContent, useEditor } from '@tiptap/react';
import Image from 'next/image';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import { Image as TipTapImage } from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import prisma from '../../../lib/prisma';
import styles from '../blog.module.scss';

type Props = {
	id: string;
	entry: any;
	date: string;
	title: string;
	image: string;
	author: string;
};

const Blog = (props: Props) => {
	const [imageHeight, setImageHeight] = useState(0);
	const [imageWidth, setImageWidth] = useState(0);
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
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
		],
	});

	if (!editor) {
		return null;
	}
	const text = (postTitle: string, postId: string) => {
		return `${postTitle} \n
		http://www.underdogdevs.org/blog/${postId}
		`;
	};

	const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
		// Do whatever you want here
		setImageHeight(event.currentTarget.naturalHeight);
		setImageWidth(event.currentTarget.naturalWidth);
	};
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Link passHref href="/blog">
					<a className={styles.return}>Back</a>
				</Link>

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
				</ul>
			</header>
			{image ? (
				<img className={styles.img} src={image} onLoad={handleImageLoad} style={imageHeight > imageWidth ? { maxHeight: '600px' } : { maxHeight: '100%' }} alt="Featured" loading="lazy" />
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
