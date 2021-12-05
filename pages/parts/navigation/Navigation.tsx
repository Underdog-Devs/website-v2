import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navigation.module.scss';

interface Props { }

function Navigation({ }: Props): ReactElement {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef<HTMLElement | null>(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	useEffect(() => {
		if (showLinks) {
			if (linksContainerRef.current) {
				linksContainerRef.current.style.height = 'auto';
			}
		} else {
			if (linksContainerRef.current) {
				linksContainerRef.current.style.height = '0px';
			}
		}
	}, [showLinks]);

	return (
		<div className={styles.container}>
			<div className={styles.desktopNav}>
				<Link href="/" passHref>
					<div>
						<img
							className={styles.image}
							src="/images/underdogdevs-01.png"
							height={175}
							width={175}
							alt="Underdog devs"
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
			<div className={styles.mobileNav}>
				<div className={styles.navHeader}>
					<Link href="/" passHref>
						<img
							className={styles.image}
							src="/images/icon-01.png"
							height={75}
							width={75}
							alt="Underdog devs"
						/>
					</Link>
					<button
						aria-label="navigation-menu"
						className={styles.navToggle}
						onClick={toggleLinks}
						onBlur={toggleLinks}
					>
						{showLinks ? <FaTimes /> : <FaBars />}
					</button>
				</div>
				<nav className={styles.mobileNavigation} ref={linksContainerRef}>
					<a href="https://forms.gle/uS1m9wMeC75reYte7" target="_blank" rel="noreferrer">
						Become a Mentee
					</a>
					<a href="https://forms.gle/UKw3cQKmmmAEZREu6" target="_blank" rel="noreferrer">Become a Mentor</a>
					<a href="mailto:underdogdevsteam@gmail.com" target="_blank" rel="noreferrer">Contact Us</a>
				</nav>
			</div>
		</div>
	);
}

export default Navigation;
