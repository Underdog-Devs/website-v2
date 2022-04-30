import React from 'react';
import styles from './login.module.scss';

const Login = () => {
	return (
		<div className={styles.container}>
			
			<div className={styles.donate}>
				<div className={styles.options}>
					<div className={styles.option}>
					<img
							className={styles.icon}
							src="/images/icon-01.png"
							height={40}
							width={40}
							alt="Underdog devs logo"
						/>
						<form action="" className={styles.form}>
							<span>Login</span>
							<input type="text" name="" id="" />
							<label htmlFor="">Username</label>
							<input type="password" />
							<label htmlFor="">Password</label>
							<a href='#'>Forgot Password</a>
							<button>Submit</button>
							<button>Reset</button>
							<a href='#'>Contact Us</a>
						</form>
					</div>
					<div className={styles.option}>
						
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
