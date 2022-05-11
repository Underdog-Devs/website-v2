import React from 'react';
import styles from './testimonials.module.scss';

import { Testimonial } from '../../testimonial';

const Testimonials = () => {
	return (
		<div className={styles.container}>
			<Testimonial />
		</div>
	);
};

export default Testimonials;
