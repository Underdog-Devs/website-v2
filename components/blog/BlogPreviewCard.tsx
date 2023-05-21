import Link from 'next/link';
import Image from 'next/image';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import { Image as TipTapImage } from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import styles from './blogPreviewCard.module.scss';

type Props = {
  post: Post;
};

interface Post {
  id: string;
  image: string;
  title: string;
  firstParagraph: string;
  text: string;
  author: string;
  date: string;
  entry: any;
}

export function BlogPreviewCard(props: Props) {
	const {
		post: { id, title, firstParagraph, author, date, entry, image },
	} = props;

	function truncateString(postTitle: string) {
		let shortendTitle;
		if (postTitle.length > 70) {
			shortendTitle = `${postTitle.slice(0, 70)}...`;
			return shortendTitle;
		}
		return postTitle;
	}

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

	const dateObj = new Date(date);
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();
	const parsedDate = `${month}/${day}/${year}`;
	const postLink = `/blog/${title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\s-]/g, '')}/${id}`;

	function splitCharactersUntilDot(string: string) {
		const dotIndex = string.lastIndexOf('.');
		if (dotIndex !== -1) {
			const firstPiece = string.substring(0, dotIndex);
			const secondPiece = string.substring(dotIndex);
			return `${firstPiece}-small${secondPiece}`;
		}
		return ''; // Return the original string as the only piece if there's no dot
	}
	return (
		<div className={styles.container}>
			<Link href={postLink}>
				{image ? (
					<img
						className={styles.img}
						src={splitCharactersUntilDot(image)}
						alt="Featured"
						loading="lazy"
					/>
				) : (
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Image src="/images/fallback.png" width="313" height="243" />
					</div>
				)}
			</Link>
			<div className={styles.cardTextContainer}>
				<h4 className={styles.title}>
					<Link href={postLink}>
						<a>{truncateString(title)}</a>
					</Link>
				</h4>
				<Link href={postLink} passHref>
					<p className={styles.textContent}>{firstParagraph}</p>
				</Link>
				<div className={styles.info}>
					<span>By <span className={styles.author}>{author}</span></span>
					<span>{parsedDate}</span>
				</div>
			</div>
		</div>
	);
}
