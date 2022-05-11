import React from 'react';
import styles from './spotlightUpload.module.scss'


const SpotlightUpload = () => {
	return (
		<>
			<div className={styles.container}>
				<section className={styles.leftCol}>
					<p className={styles.instruction}>Instructions to upload mentee spotlight information.</p>
				</section>
				<section className={styles.rightCol}>
				<a href='#' className={styles.backButton}>&lt; Back</a>
				<br/>
				<label htmlFor="">Mentee Name</label>
				<br/>
				<input type="text" />
				<br/>
				<label htmlFor="">Photo Upload</label>
				<br/>
				<input type="text" />
				<button>UPLOAD</button>
				</section>
			</div>
		</>
	);
};

export default SpotlightUpload;
