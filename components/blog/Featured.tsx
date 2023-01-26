import Link from 'next/link';
import styles from './featured.module.scss';

type Props = {
	id: string;
	img: string;
	title: string;
	text: string;
	author: string;
	date: string;
};

export function Featured(props: Props) {
	const {
		img = '/images/collab.jpg',
		id = '1337',
		title = 'Future of Work',
		author = 'Johanna Murry',
		text = 'Majority of peole will work in jobs that don’t exist today.',
		date = '02 May',
	} = props;
	return (
		<div className={styles.container}>
			<div className={styles.post}>
				<h3 className={styles.title}>
					<Link href={`/blog/${id}`}>
						<a>{title}</a>
					</Link>
				</h3>
				<div className={styles.right}>
					<span className={styles.authorName}>{author}</span>
					<span className={styles.published}>{date}</span>
				</div>

				<p>{text}</p>
				<span className={styles.readMoreLink}>Read More...</span>
			</div>
			<div className={styles.imageContainer}>
				<img
					className={styles.postImage}
					src={img}
					alt="Card"
					height={400}
					width={600}
					loading="lazy"
				/>
			</div>
		</div>
	);
}
