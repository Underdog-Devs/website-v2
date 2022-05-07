import React from 'react';
import styles from './Banner.module.scss';

import Testimonial from '../../../components/testimonial/Testimonial';

const Banner = () => {
	return (
		<div className={styles.container}>
			<Testimonial />
		</div>
	);
};

export default Banner;
