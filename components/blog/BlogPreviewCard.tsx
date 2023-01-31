import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import { generateHTML } from '@tiptap/html';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';
import Text from '@tiptap/extension-text';
import styles from './blogPreviewCard.module.scss';

type Props = {
	post: Post;
};

interface Post {
	id: string;
	image: string;
	title: string;
	name: string;
	text: string;
	author: string;
	date: string;
	entry: any;
}

export function BlogPreviewCard(props: Props) {
	const {
		post: {
			id,
			title,
			name,
			date,
			entry,
			image,
		},
	} = props;

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

	const dateObj = new Date(date);
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();
	const newdate = `${month}/${day}/${year}`;

	return (
		<div className={styles.container}>
			{image
				?(
					<img
						className={styles.img}
						src={image}
						alt="Featured"
						loading="lazy"
					/>
				)
				:<Image src="/images/fallback.png" width="313" height="243" />}
			<div className={styles.cardTextContainer}>
				<h4 className={styles.title}>
					<Link href={`/blog/${id}`}>
						<a>{title}</a>
					</Link>
				</h4>
				<pre>
					<code>
						<div dangerouslySetInnerHTML={{ __html: output }} />
					</code>
				</pre>
				<div className={styles.info}>
					<span className={styles.author}>{name}</span>
					<span className={styles.date}>{newdate}</span>
				</div>
			</div>
		</div>
	);
}
