import React from 'react';
import BackButton from '../../components/landing/BackButton/BackButton';
import Quote from '../../components/quote';
import styles from './signup.module.scss';

export default function Signup() {
	return (
		<div className={styles.container}>
			<Quote />
			<div className={styles.signupContainer}>
				<BackButton />
				<div className={styles.information}>
					<h3>Send us an email to receive more information</h3>
					<p>Someone from the intake team will reach out.</p>

					<p>
						You can reach the team directly at <br />
						<a href="mailto:underdogdevsteam@gmail.com" target="_blank" rel="noreferrer">underdogdevsteam@gmail.com</a>
					</p>

				</div>
			</div>
		</div>
	);
}
