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
			<nav className={styles.navigation}>
				<div className={styles.navigationLinks}>
					<a href="https://forms.gle/uS1m9wMeC75reYte7" target="_blank" rel="noreferrer">
						Become a Mentee
					</a>
					<a href="https://forms.gle/UKw3cQKmmmAEZREu6" target="_blank" rel="noreferrer">Become a Mentor</a>
					{/* <a href="link">Project Underdog</a> */}
				</div>
				<a href="mailto:underdogdevsteam@gmail.com" target="_blank" className={styles.getInvolvedButton} rel="noreferrer">
					Contact Us
				</a>
			</nav>
		</div>
	);
}

export default Navigation;
