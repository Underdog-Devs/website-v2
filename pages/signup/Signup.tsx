import React from 'react';
import BackButton from '../../components/landing/BackButton/BackButton';
import Quote from '../../components/quote';
import styles from './signup.module.scss';

export default function Signup() {
	const onSubmit = (data: any) => console.log(data);

	return (
		<div className={styles.container}>
			<Quote />
			<div className={styles.signupContainer}>
				<BackButton />
				<div className={styles.information}>
					<h3>Sign Up To Recieve More Information</h3>
					<p>Someone from the intake team will reach out.</p>
				</div>
				<form className={styles.form} onSubmit={onSubmit}>
					<div className={styles.inputContainer}>
						<label htmlFor="">Email Address</label>
						<input className={styles.input} type="text" placeholder="Enter email address" />
					</div>
					<input className={styles.submit} type="submit" />
				</form>
			</div>
		</div>
	);
}
