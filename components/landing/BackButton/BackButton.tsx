import React from 'react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './button.module.scss';

export default function BackButton() {
	const Back = () => (
		<>
			<Link href="/" passHref>
				<button className={styles.backButton}><FaChevronLeft /> Back </button>
			</Link>
		</>
	);
	return (
		<div className="back">
			<Back />
		</div>
	);
}
