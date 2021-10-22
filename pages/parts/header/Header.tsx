import React, { ReactElement } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';

interface Props {}

function header({}: Props): ReactElement {
	return (
		<div className={styles.container}>
			<Image
				src="/images/ud-logo.png" // Route of the image file
				height={75} // Desired size with correct aspect ratio
				width={75} // Desired size with correct aspect ratio
				alt="Your Name"
			/>
			<nav className={styles.navigation}>
				<div className={styles.navigationLinks}>
					<a href="#mentor">Mentors</a>
					<a href="#mentee">Mentees</a>
					<a href="link">Project Underdog</a>
				</div>
				<a href="#involved" className={styles.getInvolvedButton}>
					Get Involved
				</a>
			</nav>
		</div>
	);
}

export default header;
