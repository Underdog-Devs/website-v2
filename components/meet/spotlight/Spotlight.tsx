import React, { ReactElement } from 'react';
import IndividualAbout from './IndividualAbout';
import styles from './spotlight.module.scss';

interface Props {
}
// setting a default image for now, this will be removed onece we have real data

export default function Spotlight({ }: Props): ReactElement {
	return (
		<div className={styles.container}>
			{[1, 2, 3, 4, 5, 6, 7, 8].map((profile, idx) => {
				const imageType = `_type${Math.floor(Math.random() * 4) + 1}`;

				return (
					<IndividualAbout key={idx} imageType={imageType} />
				);
			})}
		</div>
	);
}
