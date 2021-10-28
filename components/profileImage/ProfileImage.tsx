import React, { ReactElement } from 'react';
import styles from './profileImage.module.scss';

interface Props {

}

export default function ProfileImage({ }: Props): ReactElement {
	return (
		<div className={styles.container}>
			<div className={styles.border_type1} />
			<div className={styles.image_type1} />
		</div>
	);
}
