import React from 'react';
import styles from './Testimonial.module.scss';

function Testimonial() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<img
					className={styles.quotation_mark}
					src="/images/quotation-mark.svg"
					alt="Large quotation mark"
				/>
				<h1>Testimonial</h1>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, neque
				aspernatur. Quis voluptas numquam sequi iste qui hic rerum, quod optio
				eum at repellendus esse, similique, illum fuga tempore repudiandae.
			</p>
			<div className={styles.author}>
				<img
					className={styles.authorImage}
					src="/images/mentee-profile 1.png"
					alt="Profile of mentee"
				/>
				<div className={styles.authorInfo}>
					<p>name</p>
					<p>title</p>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
