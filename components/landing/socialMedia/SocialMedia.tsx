import React, { ReactElement } from 'react';
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import styles from './socialMedia.module.scss';

interface Props {}

function SocialMedia({}: Props): ReactElement {
	return (
		<section className={styles.container}>
			<h3>Follow Us On Social Media</h3>
			<div className={styles.social}>
				<div className={styles.icons}>
					<a href="https://twitter.com/UnderdogDevs" target="_blank" rel="noreferrer" className={styles.icon}>
						<FiTwitter />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/Underdog-Devs-104482305007944"
						className={styles.icon}
					>
						<FiFacebook />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/underdog_devs/"
						className={styles.icon}
					>
						<FiInstagram />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.youtube.com/channel/UC8rwCavxrhcfZTYPnR_VdSg"
						className={styles.icon}
					>
						<FiYoutube />
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/Underdog-Devs" className={styles.icon}>
						<FiGithub />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/company/underdog-devs-org/"
						className={styles.icon}
					>
						<FiLinkedin />
					</a>
				</div>
			</div>
		</section>
	);
}

export default SocialMedia;
