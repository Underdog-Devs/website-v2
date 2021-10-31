import React from 'react';
import styles from './spotlightHeader.module.scss';

interface Props {
	title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>
		</div>
	);
};
