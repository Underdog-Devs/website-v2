import React, { ReactElement } from 'react';
import ProfileImage from '../../profileImage/ProfileImage';
import styles from './spotlight.module.scss';

interface Props {

}

export default function Spotlight({ }: Props): ReactElement {
	return (
		<div className={styles.container}>
			<ProfileImage />
		</div>
	);
}
