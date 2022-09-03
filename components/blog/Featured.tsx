import Link from 'next/link';
import styles from './featured.module.scss';

type Props = {
	id: number;
	img: string;
	title: string;
	text: string;
	author: string;
	date: string;
};
export function Featured(props: Props) {
	const { id, img, title, text, author, date } = props;
	return (
		<div className={styles.container}>
			<div className={styles.post}>
				<h3 className={styles.title}><Link href={`/blog/${id}`}><a>{title}</a></Link></h3>
				<p>{text}</p>
				<div className={styles.info}>
					<Link href={`/blog/${id}`}><span className={styles.readMoreLink}>Read More...</span></Link>
					<div className={styles.right}>
						<Link href={`/blog/author/${id}`}><span className={styles.authorName}>{author}</span></Link>
						<span className={styles.published}>{date}</span>
					</div>
				</div>
			</div>
			<img
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
