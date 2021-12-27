import { ImQuotesLeft } from 'react-icons/im';
import { FaAngleRight } from 'react-icons/fa';
import React, { ReactElement } from 'react';
import styles from './Quote.module.scss';

interface Props{}

function Quote({}: Props): ReactElement {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<ImQuotesLeft size={25} color="#00DAF7" className={styles.quoteIcon} />
				<p className={styles.quote}>Incarceration and recidivism rates high? Providing people an incentive to stay out of jail while also providing them some level of economic security while they get back on their feet - both accomplished by a UBI - sounds like a great way to solve that problem.</p>
				<p className={styles.author}>Andrew Yang</p>
				<FaAngleRight size={40} className={styles.angle} />
			</div>
		</div>
	);
}

export default Quote;
