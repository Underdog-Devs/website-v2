import React from 'react';
import styles from './testimonials.module.scss';

const Testimonials = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>This is the Testimonials Page</h1>
			<div className={styles.testimonialContainer}>
				<div className={styles.testimonial}>This is where the testimonial boxes will go</div>
				<div className={styles.testimonial}>This is where the testimonial boxes will go</div>
				<div className={styles.testimonial}>This is where the testimonial boxes will go</div>
			</div>
		</div>

	);
};
export default Testimonials;
