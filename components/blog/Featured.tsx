import Link from 'next/link';
import Image from 'next/image';
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
	const { image, id, title, firstParagraph, author, date } = props;

	const dateObj = new Date(date);
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();
	const parsedDate = `${month}/${day}/${year}`;

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
						alt="Featured"
						loading="lazy"
					/>
				) : (
					<Image src="/images/fallback.png" width="313" height="243" />
				)}
			</div>
		</div>
	);
}
