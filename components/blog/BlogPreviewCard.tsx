import Link from 'next/link';

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

// import { useMemo } from 'react';
// import { generateHTML } from '@tiptap/html';
// import Document from '@tiptap/extension-document';
// import Paragraph from '@tiptap/extension-paragraph';
// import Heading from '@tiptap/extension-heading';
// import Text from '@tiptap/extension-text';
import styles from './blogPreviewCard.module.scss';

type Props = {
	post: Post;
};

interface Post {
	id: string;
	img: string;
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
			id = '1337',
			title = 'Future of Work',
			name = 'Johanna Murry',
			date = '02 May',
			entry,
		},
	} = props;

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

	// const output = useMemo(() => {
	// 	return generateHTML(entry, [
	// 		Document,
	// 		Paragraph,
	// 		Heading.configure({
	// 			levels: [1, 2, 3],
	// 		}),
	// 		Text,
	// 		// Bold,
	// 		// other extensions …
	// 	]);
	// }, [entry]);

	const dateObj = new Date(date);
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();
	const newdate = `${year}/${month}/${day}`;

	return (
		<div className={styles.container}>
			<img
				className={styles.img}
				src="https://picsum.photos/500"
				alt="Featured"
				loading="lazy"
			/>
			<div className={styles.cardTextContainer}>
				<h4 className={styles.title}>
					<Link href={`/blog/${id}`}>
						<a>{title}</a>
					</Link>
				</h4>

				<EditorContent className={styles.textContent} editor={editor} />

				{/* <pre>
					<code className={styles.text}>
						<div
							className={styles.text}
							dangerouslySetInnerHTML={{ __html: output }}
						/>
					</code>
				</pre> */}
				<div className={styles.info}>
					<span className={styles.author}>{name}</span>
					<span className={styles.date}>{newdate}</span>
				</div>
			</div>
		</div>
	);
}
