import React from 'react';

export default function Signup() {
	return (
		<div>
			<i>back icon</i>
			<button> Back </button>
			<p>Sign Up To Recieve More Information</p>
			<p>Someone from the intake team will reach out.</p>
			<form>
				<label htmlFor="">email address</label>
				<input type="text" placeholder="enter email address" />
				<button>Send</button>
			</form>
		</div>
	);
}
