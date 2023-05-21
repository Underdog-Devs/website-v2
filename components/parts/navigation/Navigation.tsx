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
		} else if (linksContainerRef.current) {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showLinks]);

	return (
		<div className={styles.container}>
			<div className={styles.desktopNav}>
				<Link href="/" passHref>
					<div>
						<img
							onClick={() => setShowLinks(false)}
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
						<a href="https://forms.gle/YdE9SBfJGXc3XW928" target="_blank" rel="noreferrer">
							Become a Mentee
						</a>
						<a href="https://forms.gle/qsusfwyTA8H2vj6z5" target="_blank" rel="noreferrer">Become a Mentor</a>
						<Link href="/project-underdog" passHref>
							<a>Project Underdog</a>
						</Link>
						{/* commented out until we have testimonial data to display */}
						{/* <Link href="/testimonials" passHref>
							<p className={styles.getInvolvedButton}>Testimonials</p>
						</Link> */}
						{/* <Link href="/blog" passHref>
							<a>Blog</a>
						</Link> */}
						<Link href="/donate" passHref>
							<a>Donate</a>
						</Link>
						<Link href="/signup" passHref>
							<a>Contact Us</a>
						</Link>
					</div>

				</nav>
			</div>
			<div className={styles.mobileNav}>
				<div className={styles.navHeader}>
					<Link href="/" passHref>
						<img
							onClick={() => setShowLinks(false)}
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
					>
						{showLinks ? <FaTimes /> : <FaBars />}
					</button>
				</div>
				<nav className={styles.mobileNavigation} ref={linksContainerRef}>
					<a
						onClick={() => setShowLinks(false)}
						href="https://forms.gle/YdE9SBfJGXc3XW928"
						target="_blank"
						rel="noreferrer"
					>
						Become a Mentee
					</a>
					<a
						onClick={() => setShowLinks(false)}
						href="https://forms.gle/qsusfwyTA8H2vj6z5"
						target="_blank"
						rel="noreferrer"
					>Become a Mentor
					</a>
					<Link
						href="/project-underdog"
						passHref
					>
						<a onClick={() => setShowLinks(false)}>Project Underdog</a>
					</Link>
					{/* commented out until we have testimonial data to display */}
					{/* <Link
						href="/testimonials"
						passHref
					>
						<p onClick={() => setShowLinks(false)}>Testimonials</p>
					</Link> */}
					<Link
						href="/blog"
						passHref
					>
						<a onClick={() => setShowLinks(false)}>Blog</a>
					</Link>
					<Link
						href="/donate"
						passHref
					>
						<a onClick={() => setShowLinks(false)}>Donate</a>
					</Link>
					<Link
						href="/signup"
						passHref
					>
						<a onClick={() => setShowLinks(false)}>Contact Us</a>
					</Link>
				</nav>
			</div>
		</div>
	);
}

export default Navigation;
