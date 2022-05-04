import React from 'react';
import styles from './testimonials.module.scss';

const Testimonials = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>This is the Testimonials Page</h1>
			<div className={styles.testimonialContainer}>
				<p>This is where the testimonial boxes will go</p>
				<p>This is where the testimonial boxes will go</p>
				<p>This is where the testimonial boxes will go</p>
			</div>
		</div>

	);
};
export default Testimonials;
