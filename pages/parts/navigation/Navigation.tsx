import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navigation.module.scss';

interface Props {}

function Navigation({}: Props): ReactElement {
	return (
		<div className={styles.container}>
			<Link href="/" passHref>
				<Image
					className={styles.image}
					src="/images/ud-logo.png" // Route of the image file
					height={75} // Desired size with correct aspect ratio
					width={75} // Desired size with correct aspect ratio
					alt="Your Name"
				/>
			</Link>
			<nav className={styles.navigation}>
				<div className={styles.navigationLinks}>
					<Link href="/meet/mentees">
						Mentees
					</Link>
					<Link href="/meet/mentors">Mentors</Link>
					<a href="link">Project Underdog</a>
				</div>
				<a href="#involved" className={styles.getInvolvedButton}>
					Get Involved
				</a>
			</nav>
		</div>
	);
}

export default Navigation;
