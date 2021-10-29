import React from 'react';
import styles from './header.module.scss';

interface Props {
}

export const Header: React.FC<Props> = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Meet Our Mentors</h3>
			<div className={styles.sortBy}>Placeholder for dropdown</div>
		</div>
	);
};
