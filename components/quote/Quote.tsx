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
				<p className={styles.quote}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit nihil distinctio nostrum error vel recusandae omnis quas deleniti consequatur. Placeat assumenda quas molestiae debitis labore, magnam harum vero quaerat!</p>
				<p className={styles.author}>Hideo Kojima</p>
				<FaAngleRight size={40} className={styles.angle} />
			</div>
		</div>
	);
}

export default Quote;
