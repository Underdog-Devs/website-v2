import React from 'react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './blogUpload.module.scss';

const BlogUpload = () => {
	return (
		<div className={styles.container}>
			<div className={styles.instructionsWrapper}>
				<p className={styles.instructionsText}>
					These are the instructions for uploading a blog
				</p>
			</div>
			<form className={styles.uploadForm}>
				<div className={styles.topInputWrapper}>
					<div className={styles.header}>
						<Link href="/" passHref>
							<button className={styles.backButton}>
								<FaChevronLeft /> Back{' '}
							</button>
						</Link>
						<h3>Blog Upload</h3>
					</div>
					<label htmlFor="blogTitle">
						Title
					</label>
					<input
						className={styles.blogTitleInput}
						type="text"
						name="blogTitle"
					/>
				</div>
				<div className={styles.textAreaWrapper}>
					<label className={styles.inputLabel} htmlFor="blog">
						Blog
					</label>
					<input
						className={styles.blogTextArea}
						type="textarea"
						name="blog"
					/>
					<div className={styles.sendButton}>
						<input className={styles.button} type="submit" value="Send" />
					</div>
				</div>
			</form>
		</div>
	);
};
export default BlogUpload;
