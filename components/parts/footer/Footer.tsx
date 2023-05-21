import Link from 'next/link';
import React, { ReactElement } from 'react';
import {
	BsTwitter,
	BsFacebook,
	BsYoutube,
	BsGithub,
	BsLinkedin,
} from 'react-icons/bs';
import { ImInstagram } from 'react-icons/im';
// styles
import styles from './footer.module.scss';

interface Props {}

function Footer({}: Props): ReactElement {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.social}>
					<div className={styles.logo}>
						<img
							src="/images/underdogdevs-01.png" // Route of the image file
							height={150} // Desired size with correct aspect ratio
							width={150} // Desired size with correct aspect ratio
							alt="Your Name"
							loading="lazy"
						/>
					</div>
					<p>Connect with us on social media</p>
					<div className={styles.icons}>
						<a
							href="https://twitter.com/UnderdogDevs"
							target="_blank"
							rel="noreferrer"
							className={styles.icon}
						>
							<BsTwitter />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.facebook.com/Underdog-Devs-104482305007944"
							className={styles.icon}
						>
							<BsFacebook />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/underdog_devs/"
							className={styles.icon}
						>
							<ImInstagram />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.youtube.com/channel/UC8rwCavxrhcfZTYPnR_VdSg"
							className={styles.icon}
						>
							<BsYoutube />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Underdog-Devs"
							className={styles.icon}
						>
							<BsGithub />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/company/underdog-devs-org/"
							className={styles.icon}
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
				<div className={styles.navigation}>
					<div className={styles.navSect}>
						<h4>Community</h4>
						<a
							href="https://forms.gle/YdE9SBfJGXc3XW928"
							target="_blank"
							rel="noreferrer"
						>
							Become a Mentee
						</a>
						<a
							href="https://forms.gle/qsusfwyTA8H2vj6z5"
							target="_blank"
							rel="noreferrer"
						>
							Become a Mentor
						</a>
					</div>
					<div className={styles.navSect}>
						<h4>Organization</h4>
						<Link href="/project-underdog" passHref>
							Project Underdog
						</Link>
						{/* commented out until we have testimonial data to display */}
						{/* <Link
							href="/testimonials"
							passHref
						>
							Testimonials
						</Link> */}
						{/* <Link href="/blog" passHref>
							Blog
						</Link> */}
						<Link href="/donate" passHref>
							Donate
						</Link>
						<Link href="/signup" passHref>
							Contact Us
						</Link>
						<a
							href="https://cottonbureau.com/people/underdog-devs"
							target="_blank"
							rel="noreferrer"
						>
							Merchandise
						</a>
					</div>
				</div>
			</div>
			<p className={styles.copyright}>
				Copyright © {new Date().getFullYear()} Underdog Devs
			</p>
		</div>
	);
}

export default Footer;
