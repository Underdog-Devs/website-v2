import Link from 'next/link';
import styles from './blogPreviewCard.module.scss';

type Props = {
	id: number;
	img: string;
	title: string;
	text: string;
	author: string;
	date: string;
};

export function BlogPreviewCard(props: Props) {
	const { img = '/images/collab.jpg', id='123', title = 'Future of Work', author = 'Johanna Murry', text = 'Majority of peole will work in jobs that don’t exist today.', date = '02 May' } = props;
	return (
		<div className={styles.container}>
			<img
				className={styles.image}
				src={img}
				alt="Featured"
				height={300}
				width={300}
				loading="lazy"
			/>
			<div className={styles.cardTextContainer}>
				<h4 className={styles.title}><Link href={`/blog/${id}`}><a>{title}</a></Link></h4>
				<p className={styles.text}>{text}</p>
				<div className={styles.info}>
					<Link href={`/blog/author/${id}`} passHref><span className={styles.author}>{author}</span></Link>
					<span className={styles.date}>{date}</span>
				</div>
			</div>

		</div>
	);
}
