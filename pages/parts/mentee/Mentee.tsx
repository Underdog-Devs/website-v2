import React, { ReactElement } from 'react';
import styles from './mentee.module.scss';

interface Props {}

function Mentee({}: Props): ReactElement {
	return (
		<div className={styles.container} id="mentee">
			<div className={styles.text}>
				<h2>What is a Mentee?</h2>
				<p>
					Our mentees are aspiring software engineers from either disadvantaged backgrounds or are formerly
					incarcerated. They are ambitious and determined people learning the ins-and-outs of the software
					industry in order to land full time offers.
				</p>
			</div>
			<div className={styles.image} />
		</div>
	);
}

export default Mentee;
