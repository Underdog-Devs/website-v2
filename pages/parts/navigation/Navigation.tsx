import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './navigation.module.scss';

interface Props {}

function Navigation({}: Props): ReactElement {
	return (
		<div className={styles.container}>
			<Link href="/" passHref>
				<div>
					<img
						className={styles.image}
						src="/images/ud-logo.png"
						height={75}
						width={75}
						alt="Your Name"
					/>
				</div>
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
