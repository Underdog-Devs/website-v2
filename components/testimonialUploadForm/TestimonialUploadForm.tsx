import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './testimonialUploadForm.module.scss';

function TestimonialUploadForm() {
	return (
		<div className={styles.container}>
			<section className={styles.mainCol}>
				<div className={styles.back}>
					<Link href="/" passHref>
						<button className={styles.backButton}>
							<FaChevronLeft /> Back{' '}
						</button>
					</Link>
				</div>
				<div className={styles.topInput}>
					<div className={styles.input}>
						<label className={styles.labels} htmlFor="name">
							Name
						</label>
						<input id="name" type="text" />
					</div>
					<div className={styles.input}>
						<label className={styles.labels} htmlFor="upload">
							Photo Upload
						</label>
						<div className={styles.upload}>
							<input id="upload" type="text" />
							<button className={styles.button}>Upload</button>
						</div>
					</div>
				</div>

				<div className={styles.dropdown}>
					<div className={styles.input}>
						<label htmlFor="dropdown">Choose Type</label>
						<select name="dropdown" id="dropdown">
							<option value="mentee">mentee testimonial</option>
							<option value="mentor">mentor testimonial</option>
						</select>
					</div>
				</div>

				<div className={styles.textArea}>
					<div className={styles.input}>
						<label htmlFor="testimonialText" className={styles.labels}>
							Testimonial Text
						</label>
						<textarea
							className={styles.testimonialText}
							name="testimonialText"
							rows={6}
							id="testimonialText"
						/>
					</div>
				</div>
				<div className={styles.sendButton}>
					<input className={styles.button} type="submit" value="Send" />
				</div>
			</section>
		</div>
	);
}

export default TestimonialUploadForm;
