import React from 'react';
import styles from './spotlightUpload.module.scss';

const SpotlightUpload = () => {
	return (
		<>
			<div className={styles.container}>

				<section className={styles.leftCol}>
					<p className={styles.instruction}>Instructions to upload mentee spotlight information.</p>
				</section>

				<section className={styles.rightCol}>
					<div className={styles.topInput}>
						<button href="#" className={styles.backButton}>&lt; Back</button>
						<br />
						<label className={styles.labels} htmlFor="">Mentee Name<sup>*</sup></label>
						<br />
						<input type="text" placeholder="enter mentee name" />
						<br />
						<label className={styles.labels} htmlFor="">Photo Upload</label>
						<br />
						<input type="text" placeholder="mentee photo" />
						<button className={styles.uploadButton}>UPLOAD</button>
					</div>

					<div className={styles.inputDiv}>
						<div className={styles.inputRow}>
							<div className={styles.inputColumn1}>
								<label className={styles.labels} htmlFor="menteePortfolio">Mentee Portfolio</label>
								<br />
								<input
									type="text"
									id="menteePortfolio"
									name="menteePortfolio"
									placeholder="portfolio"
								/>
								<br />

								<label className={styles.labels} htmlFor="facebook">Facebook</label>
								<br />
								<input
									type="text"
									id="facebook"
									name="facebook"
									placeholder="facebook"
								/>

								<br />
								<label className={styles.labels} htmlFor="instagram">Instagram</label>
								<br />
								<input
									type="text"
									id="instagram"
									name="instagram"
									placeholder="instagram"
								/>
							</div>

							<div className={styles.inputColumn2}>
								<label className={styles.labels} htmlFor="twitter">Twitter</label>
								<br />
								<input
									type="text"
									id="twitter"
									name="twitter"
									placeholder="twitter"
								/>
								<br />

								<label className={styles.labels} htmlFor="linkedin">LinkedIn</label>
								<br />
								<input
									type="text"
									id="linkedin"
									name="linkedin"
									placeholder="linkedin"
								/>

								<br />
								<label className={styles.labels} htmlFor="youtube">YouTube</label>
								<br />
								<input
									type="text"
									id="youtube"
									name="youtube"
									placeholder="youtube"
								/>
							</div>
							<br />

						</div>
						<label className={styles.labels}>Mentee Blurb<sup>*</sup></label
						><br />
						<input
							type="text"
							className={styles.menteeBlurb}
							name="menteeBlurb"
							placeholder="enter mentee blurb"
						/><br />

						<div className={styles.sendBtnDiv}>
							<input
								type="submit"
								id="sendBtn"
								value="Send"
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default SpotlightUpload;
