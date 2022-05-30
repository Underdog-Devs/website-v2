import React from 'react';
import Testimonials from '../../components/landing/testimonials/Testimonials';
import styles from './testimonialsPage.module.scss';

const TestimonialsPage = () => {
	return (
		<div className={styles.container}>
			<Testimonials content={12} />
		</div>
	);
};

export default TestimonialsPage;
