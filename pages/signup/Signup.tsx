import React from 'react';
import { useForm } from 'react-hook-form';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './signup.module.scss';

export default function Signup() {
	const Back = () => (<button className={styles.back}><FaChevronLeft /> Back </button>);
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div className={styles.container}>
			<Back />
			<div className={styles.information}>
				<h3>Sign Up To Recieve More Information</h3>
				<p>Someone from the intake team will reach out.</p>
			</div>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="">email address</label>
				<input className={styles.input} type="text" placeholder="enter email address" {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} />
				<input className={styles.submit} type="submit" />
			</form>
		</div>
	);
}
