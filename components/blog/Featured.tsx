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
	const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
		// Do whatever you want here
		setImageHeight(event.currentTarget.naturalHeight);
		setImageWidth(event.currentTarget.naturalWidth);
	};
	return (
		<div className={styles.container}>
			<div className={styles.post}>
				<h3 className={styles.title}>
					<Link href={`/blog/${title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\s-]/g, '')}/${id}`}>
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
					<Link href={`/blog/${title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\s-]/g, '')}/${id}`}>
						<a className={styles.read}>Read article...</a>
					</Link>
				</div>
			</div>

			<div className={styles.imageContainer}>
				{image ? (
					<img
						className={styles.img}
						src={image}
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
