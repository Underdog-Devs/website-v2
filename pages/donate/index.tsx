import Image from 'next/image';
import React from 'react';
import { FaCcPaypal } from 'react-icons/fa';
import { IoLogoVenmo } from 'react-icons/io5';
import styles from './donate.module.scss';

const Donate = () => {
	return (
		<div className={styles.container}>
			<div className={styles.callToAction}>
				<div className={styles.actionText}>
					<h3>We appreciate your commitment to helping us combat recidivism</h3>
					<p>Your donation will directly help supply mentees in our program with much needed equipment to aid them in their learning and help fund Project Underdog.</p>
				</div>
				<Image
					className={styles.together}
					src="/images/together.jpg"
					alt="dice spelling out: together is the way"
					height={400}
					width={600}
					loading="lazy"
				/>
			</div>
			<div className={styles.donate}>
				<h2>Ways to Donate.</h2>
				<div className={styles.options}>
					<div className={styles.option}>
						<div className={styles.paypalContainer}>
							<p className={styles.donateText}> Donate with Paypal</p>
							<FaCcPaypal className={styles.icon} />
						</div>
						<form
							className={styles.donateButton}
							action="https://www.paypal.com/donate"
							method="post"
							target="_blank"
						>
							<input type="hidden" name="hosted_button_id" value="2R2AP79YGLEXJ" />
							<input
								type="image"
								src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
								name="submit"
								title="PayPal - The safer, easier way to pay online!"
								alt="Donate with PayPal button"
							/>
						</form>{' '}
					</div>
					<div className={styles.option}>
						<p className={styles.donateText}> Donate with Venmo</p>
						<IoLogoVenmo className={styles.icon} />
						<p className={styles.donateSubText}> Coming Soon! </p>
						{/* <p className={styles.donateSubText}> Send your donations to: <br /> @underdogdevs </p> */}

					</div>
					<div className={styles.option}>
						<p className={styles.donateText}> Donate Directly</p>
						<Image
							className={styles.icon}
							src="/images/icon-01.png"
							height={40}
							width={40}
							alt="Underdog devs logo"
						/>
						<p className={styles.donateSubText}> Send your donations to: <br />
							<b>Account owner:</b> Underdog Devs, Inc. <br />
							<b>Bank:</b> Evolve Bank & Trust,  <br />
							6070 Poplar Ave, Suite 200, <br />
							Memphis, TN 38119 <br />
							<b>Account number:</b> 9800363760 <br />
							<b>Routing number:</b> 084106768
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Donate;
