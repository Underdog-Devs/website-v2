import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Input } from '../input';
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
					<Input labelFor="name" labelText="Name">
						<input id="name" type="text" />
					</Input>
					<Input labelFor="upload" labelText="Photo Upload">
						<div className={styles.upload}>
							<input id="upload" type="text" />
							<button className={styles.button}>Upload</button>
						</div>
					</Input>
				</div>
				<Input labelFor="dropdown" labelText="Choose Type">
					<select name="dropdown" id="dropdown">
						<option value="mentee">mentee testimonial</option>
						<option value="mentor">mentor testimonial</option>
					</select>
				</Input>
				<Input labelFor="testimonialText" labelText="Testimonial Text">
					<textarea
						className={styles.testimonialText}
						name="testimonialText"
						rows={6}
						id="testimonialText"
					/>
				</Input>
				<div className={styles.sendButton}>
					<input className={styles.button} type="submit" value="Send" />
				</div>
			</section>
		</div>
	);
}

export default TestimonialUploadForm;
