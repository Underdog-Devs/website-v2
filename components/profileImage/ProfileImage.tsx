import React from 'react';

interface Props {
  image: string;
  imageType: string;
}

const ProfileImage: React.FC<Props> = (props) => {
	const { image, imageType } = props;

	return (
		<div>
			<div id={`border${imageType}`} />
			<div id={`image${imageType}`} style={{ backgroundImage: `url(${image})` }} />
		</div>
	);
};

export default ProfileImage;
