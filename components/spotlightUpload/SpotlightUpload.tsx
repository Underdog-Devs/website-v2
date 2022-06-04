import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './spotlightUpload.module.scss';

const SpotlightUpload = () => {
	return (
		<>
			<div className={styles.container}>
				<section className={styles.leftCol}>
					<p className={styles.instruction}>Instructions to upload mentee spotlight information.</p>
				</section>
				<section className={styles.rightCol}>
					<div className={styles.back}>
						<Link href="/" passHref>
							<button className={styles.backButton}><FaChevronLeft /> Back </button>
						</Link>
					</div>
					<div className={styles.topInput}>
						<div className={styles.input}>
							<label className={styles.labels} htmlFor="mentee-name">Mentee Name
							</label>
							<input id="mentee-name" type="text" />
						</div>
						<div className={styles.input}>
							<label className={styles.labels} htmlFor="upload">Photo Upload</label>
							<div className={styles.upload}>
								<input id="upload" type="text" />
								<button className={styles.button}>Upload</button>
							</div>
						</div>
					</div>
					<div className={styles.socialsContainer}>
						<div className={styles.input}>
							<label className={styles.labels} htmlFor="menteePortfolio">Mentee Portfolio</label>
							<input
								type="text"
								id="menteePortfolio"
								name="menteePortfolio"
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.labels} htmlFor="facebook">Facebook</label>
							<input
								type="text"
								id="facebook"
								name="facebook"
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.labels} htmlFor="instagram">Instagram</label>
							<input
								type="text"
								id="instagram"
								name="instagram"
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.labels} htmlFor="twitter">Twitter</label>
							<input
								type="text"
								id="twitter"
								name="twitter"
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.labels} htmlFor="linkedin">LinkedIn</label>
							<input
								type="text"
								id="linkedin"
								name="linkedin"
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.labels} htmlFor="youtube">YouTube</label>
							<input
								type="text"
								id="youtube"
								name="youtube"
							/>
						</div>
					</div>
					<div className={styles.textArea}>
						<div className={styles.input}>
							<label htmlFor="menteeBlurb" className={styles.labels}>Mentee Blurb</label>
							<textarea
								className={styles.menteeBlurb}
								name="menteeBlurb"
								rows={6}
								id="menteeBlurb"
							/>
						</div>
					</div>
					<div className={styles.sendButton}>
						<input
							className={styles.button}
							type="submit"
							value="Send"
						/>
					</div>
				</section>
			</div>
		</>
	);
};

export default SpotlightUpload;
