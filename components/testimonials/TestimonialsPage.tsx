import React from 'react';
import Testimonials from '../landing/testimonials/Testimonials';
import styles from './testimonialsPage.module.scss';

const TestimonialsPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>Testimonials</h1>
				<p>Some words from mentees and mentors about Underdog Devs</p>
			</div>
			<Testimonials content={12} />
		</div>
	);
};

export default TestimonialsPage;
