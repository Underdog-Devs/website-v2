import React, { ReactElement } from 'react';
import Image from 'next/image';
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs';
// styles
import styles from './footer.module.scss';

interface Props {}

function Footer({}: Props): ReactElement {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.social}>
					<div className={styles.logo}>
						<Image
							src="/images/ud-logo.png" // Route of the image file
							height={75} // Desired size with correct aspect ratio
							width={75} // Desired size with correct aspect ratio
							alt="Your Name"
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
							<BsInstagram />
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
							href="https://www.linkedin.com/in/underdog-devs-6b9482205/"
							className={styles.icon}
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
				<div className={styles.navigation}>
					<div className={styles.navSect}>
						<h3>Mentors</h3>
						<a href="link">Become a Mentee</a>
						<a href="link">Meet the Mentees</a>
					</div>
					<div className={styles.navSect}>
						<h3>Mentees</h3>
						<a href="link">Become a Mentor</a>
						<a href="link">Meet the Mentors</a>
					</div>
					<div className={styles.navSect}>
						<h3>Organization</h3>
						<a href="link">About</a>
						<a href="link">Terms</a>
						<a href="link">Get Involved</a>
						<a href="link">Privacy Policy</a>
					</div>
				</div>
			</div>
			<p className={styles.copyright}>Copyright © 2020. Underdog Devs</p>
		</div>
	);
}

export default Footer;
