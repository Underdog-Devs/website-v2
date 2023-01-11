import Link from 'next/link';
import styles from './blogPreviewCard.module.scss';

type Props = {
	id: string;
	img: string;
	title: string;
	text: any;
	author: string;
	date: Date;
};

export function BlogPreviewCard(props: Props) {
	const {
		img = '/images/collab.jpg',
		id = '1337',
		title = 'Future of Work',
		author = 'Johanna Murry',
		text = 'Majority of peole will work in jobs that don’t exist today.',
		date = '02 May',
	} = props;

	const convertedDate = new Date(date);
	const month = convertedDate.getUTCMonth() + 1;
	const day = convertedDate.getUTCDate();
	const year = convertedDate.getUTCFullYear();
	const formattedDate = `${month}/${day}/${year}`;

	return (
		<div className={styles.container}>
			<img className={styles.image} src={img} alt="Featured" loading="lazy" />
			<div className={styles.cardTextContainer}>
				<h4 className={styles.title}>
					<Link href={`/blog/${id}`}>
						<a>{title}</a>
					</Link>
				</h4>

				{/* <p className={styles.text}>{text}</p> */}
				{text.content
					&& text.content[0].content.map((singleContent: { text: any }) => {
						return <div>{singleContent.text}</div>;
					})}
				<div className={styles.info}>
					<span className={styles.author}>{author}</span>
					<span className={styles.date}>{formattedDate}</span>
				</div>
			</div>
		</div>
	);
}
