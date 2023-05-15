import Link from 'next/link';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';
import styles from './featured.module.scss';
import type { Props } from '../../types/Props';

export function Featured(props: Props) {
	const [imageHeight, setImageHeight] = useState(0);
	const [imageWidth, setImageWidth] = useState(0);
	const { image, id, title, firstParagraph, author, date } = props;

	const dateObj = new Date(date);
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();
	const parsedDate = `${month}/${day}/${year}`;
	const postLink = `/blog/${title
		.replace(/\s+/g, '-')
		.replace(/[^a-zA-Z0-9\s-]/g, '')}/${id}`;

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
	return (
		<div className={styles.container}>
			<div className={styles.post}>
				<h3 className={styles.title}>
					<Link href={postLink}>
						<a>{title}</a>
					</Link>
				</h3>
				<div className={styles.right}>
					<span>
						Written by <span className={styles.authorName}>{author}</span>
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
						style={
							imageHeight > imageWidth
								? { maxHeight: '300px' }
								: { maxHeight: '100%' }
						}
						alt="Featured"
						loading="lazy"
						onLoad={handleImageLoad}
					/>
				) : (
					<Image
						src="/images/fallback.png"
						alt="Underdog Devs logo"
						width="313"
						height="243"
					/>
				)}
			</div>
		</div>
	);
}
