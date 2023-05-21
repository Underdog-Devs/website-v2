import Link from 'next/link';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';
import styles from './featured.module.scss';

type Props = {
	id: string;
	image: string;
	title: string;
	firstParagraph: string;
	author: string;
	date: string;
};

export function Featured(props: Props) {
	const [imageHeight, setImageHeight] = useState(0);
	const [imageWidth, setImageWidth] = useState(0);
	const { image, id, title, firstParagraph, author, date } = props;

	const dateObj = new Date(date);
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();
	const parsedDate = `${month}/${day}/${year}`;
	const postLink = `/blog/${title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\s-]/g, '')}/${id}`;
	const authorLink = author?.replace(/\s/g, '-');

	const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
		// Do whatever you want here
		setImageHeight(event.currentTarget.naturalHeight);
		setImageWidth(event.currentTarget.naturalWidth);
	};

	function splitCharactersUntilDot(string: string) {
		const dotIndex = string.lastIndexOf('.');
		if (dotIndex !== -1) {
			const firstPiece = string.substring(0, dotIndex);
			const secondPiece = string.substring(dotIndex);
			return `${firstPiece}-small${secondPiece}`;
		}
		return ''; // Return the original string as the only piece if there's no dot
	}

	function truncateString(postTitle: string) {
		let shortendTitle;
		if (postTitle.length > 120) {
			shortendTitle = `${postTitle.slice(0, 120)}...`;
			return shortendTitle;
		}
		return postTitle;
	}
	return (
		<div className={styles.container}>
			<div className={styles.post}>
				<h3 className={styles.title}>
					<Link href={postLink}>
						<a>{truncateString(title)}</a>
					</Link>
				</h3>
				<div className={styles.right}>
					<span>
						Written by <Link href={`/blog/author/${authorLink}`} passHref><span className={styles.authorName}>{author}</span></Link>
					</span>
					<span className={styles.published}>{parsedDate}</span>
				</div>

				<p>{firstParagraph}</p>
				<div>
					<Link href={postLink}>
						<a className={styles.read}>Read more...</a>
					</Link>
				</div>
			</div>

			<div className={styles.imageContainer}>
				{image ? (
					<img
						className={styles.img}
						src={splitCharactersUntilDot(image)}
						style={imageHeight > imageWidth ? { maxHeight: '300px' } : { maxHeight: '100%' }}
						alt="Featured"
						loading="lazy"
						onLoad={handleImageLoad}
					/>
				) : (
					<Image src="/images/fallback.png" width="313" height="243" />
				)}
			</div>
		</div>
	);
}
