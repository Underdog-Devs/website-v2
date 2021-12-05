import React, { ReactElement } from 'react';
import styles from './getInvolved.module.scss';

interface Props { }

function GetInvolved({ }: Props): ReactElement {
	return (
		<section className={styles.container} id="involved">
			<h3>Want to Get Involved?</h3>
			<p>
				You can reach the team directly at{'  '}
			</p>
			<a href="mailto:underdogdevsteam@gmail.com" target="_blank" rel="noreferrer">underdogdevsteam@gmail.com</a>
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
