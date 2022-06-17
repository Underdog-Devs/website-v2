import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Input } from '../input';
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
						<Input labelFor="mentee-name" labelText="Mentee Name">
							<input id="mentee-name" type="text" />
						</Input>
						<Input labelFor="upload" labelText="Photo Upload">
							<div className={styles.upload}>
								<input id="upload" type="text" />
								<button className={styles.button}>Upload</button>
							</div>
						</Input>
					</div>
					<div className={styles.socialsContainer}>
						<Input labelFor="menteePortfolio" labelText="Mentee Portfolio">
							<input
								type="text"
								id="menteePortfolio"
								name="menteePortfolio"
							/>
						</Input>
						<Input labelFor="facebook" labelText="Facebook">
							<input
								type="text"
								id="facebook"
								name="facebook"
							/>
						</Input>
						<Input labelFor="instagram" labelText="Instagram">
							<input
								type="text"
								id="instagram"
								name="instagram"
							/>
						</Input>
						<Input labelFor="twitter" labelText="Twitter">
							<input
								type="text"
								id="twitter"
								name="twitter"
							/>
						</Input>
						<Input labelFor="linkedin" labelText="LinkedIn">
							<input
								type="text"
								id="linkedin"
								name="linkedin"
							/>
						</Input>
						<Input labelFor="youtube" labelText="YouTube">
							<input
								type="text"
								id="youtube"
								name="youtube"
							/>
						</Input>
					</div>
					<div className={styles.textArea}>
						<Input labelFor="menteeBlurb" labelText="Mentee Blurb">
							<textarea
								className={styles.menteeBlurb}
								name="menteeBlurb"
								rows={6}
								id="menteeBlurb"
							/>
						</Input>
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
