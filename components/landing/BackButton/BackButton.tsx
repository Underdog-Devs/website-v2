import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './button.module.scss';

export default function BackButton() {
	const Back = () => (<button className={styles.backButton}><FaChevronLeft /> Back </button>);
	return (
		<div className="back">
			<Back />
		</div>
	);
}
