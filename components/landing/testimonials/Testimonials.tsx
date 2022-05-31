import React from 'react';
import styles from './testimonials.module.scss';

import { Testimonial } from '../../testimonial';

interface Props {
	// this will eventually be the array of testimonials to display
	content: number;
}

const Testimonials = (props: Props) => {
	const { content } = props;

	return (
		<div className={styles.container}>
			{Array.from(Array(content).keys()).map((t, i) => {
				return (
					<div key={i}>
						<Testimonial />
					</div>
				);
			})}
		</div>
	);
};

export default Testimonials;
