import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import BackButton from '../../components/landing/BackButton/BackButton';
import Quote from '../../components/quote';
import styles from './signup.module.scss';

export default function Signup() {
	// const [email, setEmail] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [errors, setErrors] = useState('');

	// const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = e.target;
	// 	setEmail(value);
	// };

	// const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	const emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email);
	// 	if (emailValid) {
	// 		emailjs
	// 			.sendForm(
	// 				process.env.NEXT_PUBLIC_SERVICE_ID || '',
	// 				process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
	// 				e.currentTarget,
	// 				process.env.NEXT_PUBLIC_USER_ID,
	// 			)
	// 			.then(
	// 				(result) => {
	// 					console.log(result.text);
	// 				},
	// 				(error) => {
	// 					console.log(error.text);
	// 				},
	// 			);
	// 	}
	// 	setEmail('');
	// 	setErrors('');
	// };

	return (
		<div className={styles.container}>
			<Quote />
			<div className={styles.signupContainer}>
				<BackButton />
				<div className={styles.information}>
					<h3>Send us an email to receive more information</h3>
					<p>Someone from the intake team will reach out.</p>
					{/* <p> - OR - </p> */}

					<p>
						You can reach the team directly at <br />
						<a href="mailto:underdogdevsteam@gmail.com" target="_blank" rel="noreferrer">underdogdevsteam@gmail.com</a>
					</p>

				</div>
				{/* <form className={styles.form} onSubmit={sendEmail}>
					<div className={styles.inputContainer}>
						<label htmlFor="">Email Address</label>
						<input
							className={styles.input}
							type="email"
							placeholder="Enter email address"
							value={email}
							onChange={handleEmailChange}
						/>
					</div>
					<input className={styles.submit} type="submit" />
				</form> */}
			</div>
		</div>
	);
}
