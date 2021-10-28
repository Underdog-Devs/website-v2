import React, { ReactElement } from 'react';
import styles from './spotlight.module.scss';

interface Props {

}

export default function Spotlight({ }: Props): ReactElement {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<div className={styles.border_type1} />
				<div className={styles.image_type1} />
			</div>
		</div>
	);
}
