import styles from './card.module.scss';

type Props = {
	img: string;
	title: string;
	text: string;
	author: string;
	date: string;
};

export function Card(props: Props) {
	const { img = './collab.jpg', title, text, author, date } = props;
	return (
		<div className={styles.container}>
			<img
				className={styles.image}
				src={img}
				alt="Featured"
				height={400}
				width={600}
				loading="lazy"
			/>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
			<div className={styles.info}>
				<span className={styles.author}>{author}</span>
				<span className={styles.date}>{date}</span>
			</div>
		</div>
	);
}
