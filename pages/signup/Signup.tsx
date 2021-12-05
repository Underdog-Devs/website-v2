import React from 'react';
import { useForm } from 'react-hook-form';
import BackButton from '../../components/landing/BackButton/BackButton';
import Quote from '../../components/quote';
import styles from './signup.module.scss';

export default function Signup() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div className={styles.container}>
			<Quote />
			<div className={styles.signupContainer}>
				<BackButton />
				<div className={styles.information}>
					<h3>Sign Up To Recieve More Information</h3>
					<p>Someone from the intake team will reach out.</p>
				</div>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="">Email address</label>
					<input className={styles.input} type="text" placeholder="Enter email address" {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} />
					<input className={styles.submit} type="submit" />
				</form>
			</div>
		</div>
	);
}
