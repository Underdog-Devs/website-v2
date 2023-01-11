import Image from 'next/image';
import styles from './featured.module.scss';

type Props = {
	img: string;
	title: string;
	text: string;
	author: string;
	date: string;
};
export function Featured(props: Props) {
	const { img, title, text, author, date } = props;
	return (
		<div className={styles.container}>
			<div className={styles.post}>
				<h3>{title}</h3>
				<p>{text}</p>
				<div className={styles.info}>
					<span className={styles.readMoreLink}>Read More...</span>
					<div className={styles.right}>
						<span className={styles.authorName}>{author}</span>
						<span className={styles.published}>{date}</span>
					</div>
				</div>
			</div>
			<Image
				className={styles.postImage}
				src={img}
				alt="Card"
				height={400}
				width={600}
				loading="lazy"
			/>
		</div>
	);
}
