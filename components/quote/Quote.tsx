import { ImQuotesLeft } from 'react-icons/im';
import { FaAngleRight } from 'react-icons/fa';
import React, { ReactElement } from 'react';
import styles from './Quote.module.scss';

interface Props { }

function Quote({ }: Props): ReactElement {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<ImQuotesLeft size={25} color="#00DAF7" className={styles.quoteIcon} />
				<p className={styles.quote}>There is no exercise better for the heart than reaching down and lifting people up.
				</p>
				<p className={styles.author}>― John Holmes
				</p>
				<FaAngleRight size={40} className={styles.angle} />
			</div>
		</div>
	);
}

export default Quote;
