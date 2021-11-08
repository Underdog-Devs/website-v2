import React, { ReactElement } from 'react';
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
						<img
							src="/images/underdogdevs-03.png" // Route of the image file
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
						<h4>Mentees</h4>
						<a href="https://forms.gle/7PWZd7cfp9jve7Yu5" target="_blank" rel="noreferrer">Become a Mentee</a>
					</div>
					<div className={styles.navSect}>
						<h4>Mentors</h4>
						<a href="https://forms.gle/UKw3cQKmmmAEZREu6" target="_blank" rel="noreferrer">Become a Mentor</a>
					</div>
					{/* <div className={styles.navSect}>
						<h4>Organization</h4>
						<a href="link">About</a>
						<a href="link">Terms</a>
						<a href="link">Get Involved</a>
						<a href="link">Privacy Policy</a>
					</div> */}
				</div>
			</div>
			<p className={styles.copyright}>Copyright © 2020. Underdog Devs</p>
		</div>
	);
}

export default Footer;
