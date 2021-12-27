import React, { ReactElement } from 'react';
import Link from 'next/link';
import { FaCcPaypal } from 'react-icons/fa'
import styles from './getInvolved.module.scss';

interface Props { }

function GetInvolved({ }: Props): ReactElement {
	return (
		<section className={styles.container} id="involved">
			<h3>Want to Get Involved?</h3>
			<p>Request more information
				<Link href="/signup" passHref>
					<a href="https://forms.gle/uS1m9wMeC75reYte7" rel="noreferrer">
						here
					</a>
				</Link>
			</p>
			<p> - OR - </p>

			<p>
				You can reach the team directly at{'  '}
			</p>
			<a href="mailto:underdogdevsteam@gmail.com" target="_blank" rel="noreferrer">underdogdevsteam@gmail.com</a>
			<div className={styles.paypalContainer}>
				<h3 className={styles.donateText}>Donate with </h3>
				<FaCcPaypal className={styles.paypalIcon} />
			</div>
			<form className={styles.donate} action="https://www.paypal.com/donate" method="post" target="_blank">
				<input type="hidden" name="hosted_button_id" value="2R2AP79YGLEXJ" />
				<input
					type="image"
					src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
					name="submit"
					title="PayPal - The safer, easier way to pay online!"
					alt="Donate with PayPal button"
				/>
			</form>{' '}
		</section>
	);
}

export default GetInvolved;
