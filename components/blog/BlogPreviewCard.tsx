import Image from 'next/image';
import styles from './blogPreviewCard.module.scss';

type Props = {
	img: string;
	title: string;
	text: string;
	author: string;
	date: string;
};

export function BlogPreviewCard(props: Props) {
	const { img = '/images/collab.jpg', title = 'Future of Work', author = 'Johanna Murry', text = 'Majority of peole will work in jobs that don’t exist today.', date = '02 May' } = props;
	return (
		<div className={styles.container}>
			<Image
				className={styles.image}
				src={img}
				alt="Featured"
				height={300}
				width={300}
				loading="lazy"
			/>
			<div className={styles.cardTextContainer}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>
				<div className={styles.info}>
					<span className={styles.author}>{author}</span>
					<span className={styles.date}>{date}</span>
				</div>
			</div>

		</div>
	);
}
