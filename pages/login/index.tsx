import React from 'react';
import styles from './login.module.scss';

const Login = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.logoImage}
				src="/images/underdogdevs-01.png"
				alt="Underdog Devs Logo"
				height={300}
				width={300}
				loading="lazy"
			/>
			<div className={styles.formContainer}>
				<h4 className={styles.title}>Login</h4>
				<form className={styles.form}>
					<div className={styles.formField}>
						<input
							className={styles.formInput}
							type="text"
							name="email"
							id="email"
							value=""
							placeholder="Email"
						/>
						<label className={styles.formLabel} htmlFor="email">Email</label>
					</div>
					<div className={styles.formField}>
						<input
							className={styles.formInput}
							type="password"
							name="password"
							id="password"
							value=" "
							placeholder="Password"
						/>
						<label className={styles.formLabel} htmlFor="password">Password</label>
					</div>
					<div className={styles.formActions}>
						<button className={styles.formButton}>Login</button>
						<button className={styles.formButton}>Forgot Password?</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
