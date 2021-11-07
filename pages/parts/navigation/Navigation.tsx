import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './navigation.module.scss';

interface Props { }

function Navigation({ }: Props): ReactElement {
	return (
		<div className={styles.container}>
			<Link href="/" passHref>
				<div>
					<img
						className={styles.image}
						src="/images/underdogdevs-01.png"
						height={175}
						width={175}
						alt="Your Name"
					/>
				</div>
			</Link>
			{/* <nav className={styles.navigation}>
				<div className={styles.navigationLinks}>
					<a href="#mentees">
						Mentees
					</a>
					<a href="#mentors">Mentors</a>
					<a href="link">Project Underdog</a>
				</div>
				<a href="#involved" className={styles.getInvolvedButton}>
					Get Involved
				</a>
			</nav> */}
		</div>
	);
}

export default Navigation;
