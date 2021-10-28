import React, { ReactElement } from 'react';
import ProfileImage from '../../profileImage/ProfileImage';
import styles from './spotlight.module.scss';

interface Props {
	imageType: string;
}
// setting a default image for now, this will be removed onece we have real data

export default function Spotlight({ imageType }: Props): ReactElement {
	return (
		<div className={styles.container}>
			<ProfileImage imageType={imageType} image="https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
		</div>
	);
}
