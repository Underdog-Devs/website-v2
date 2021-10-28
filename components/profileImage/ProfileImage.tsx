import React from 'react';
import styles from './profileImage.module.scss';

interface Props {
  image: string;
  imageType: string;
}

const ProfileImage: React.FC<Props> = (props) => {
	const { image, imageType } = props;
	console.log(imageType);
	return (
		<div className={styles.container}>
			<div id={`border${imageType}`} />
			<div id={`image${imageType}`} style={{ backgroundImage: `url(${image})` }} />
		</div>
	);
};

export default ProfileImage;
