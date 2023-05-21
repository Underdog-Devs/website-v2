import React, { SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
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
	const postLink = `/blog/${title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\s-]/g, '')}/${id}`;
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
	const twitterText = (postTitle: string, postId: string) => {
		return `${postTitle} \n
		http://www.underdogdevs.org/blog/${postId}
		`;
	};

	const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
		setImageHeight(event.currentTarget.naturalHeight);
		setImageWidth(event.currentTarget.naturalWidth);
	};
	console.log(`http://www.underdogdevs.org${postLink}`);
	return (

		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta property="og:image" content={image || 'https://www.underdogdevs.org/images/fallback.png'} />
				<meta property="og:description" content="UnderdogDevs is a group of software engineers supporting formerly incarcerated and disadvantaged aspiring developers" />
				<meta property="og:url" content={`http://www.underdogdevs.org${postLink}`} />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content="UnderdogDevs" />
				<meta property="article:published_time" content={date} />
				<meta property="article:author" content={author} />
				<meta property="article:section" content="Technology" />
				<meta property="article:tag" content="Technology" />
				<meta property="article:tag" content="Software Engineering" />
				<meta property="article:tag" content="Software Development" />
				<meta property="article:tag" content="Software" />
				<meta property="article:tag" content="Programming" />
				<meta property="article:tag" content="Programming Languages" />
				<meta property="article:tag" content="Web Development" />
				<meta property="article:tag" content="Web Developer" />
			</Head>
			<header className={styles.header}>
				<Link passHref href="/blog">
					<a className={styles.return}>Back</a>
				</Link>

				<h3>{title}</h3>

				<ul className={styles.socialContainer}>
					<p>Share</p>
					<li>
						<a
							href={`https://twitter.com/intent/tweet?text=${twitterText(title, id)}`}
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
				<Image src="/images/fallback.png" height="230" width="320" priority={true} />
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
