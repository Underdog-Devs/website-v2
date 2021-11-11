import React from 'react';
import { useForm } from 'react-hook-form';

export default function Signup() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div>
			<i>back icon</i>
			<button> Back </button>
			<p>Sign Up To Recieve More Information</p>
			<p>Someone from the intake team will reach out.</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="">email address</label>
				<input type="text" placeholder="enter email address" {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} />
				<input type="submit" />
			</form>
		</div>
	);
}
