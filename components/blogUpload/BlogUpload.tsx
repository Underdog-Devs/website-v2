import React from 'react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './blogUpload.module.scss';

// Need to center Blog Upload Form with Smaller Heading Size
// Need to change border of input area to allign with design template
// Justifying content space-between causees to much space compared to template and wehn vh = 100% there is no space
const BlogUpload = () => {
	return (
		<div className={styles.container}>
			<div className={styles.instructionsWrapper}>
				<p className={styles.instructionsText}>
					These are the instructions for uploading a blog
				</p>
			</div>
			<form className={styles.uploadForm}>
				<div className={styles.input}>
					<div className={styles.header}>
						<div className={styles.back}>
							<Link href="/" passHref>
								<button className={styles.backButton}>
									<FaChevronLeft /> Back{' '}
								</button>
							</Link>
						</div>
						<h4>Blog Upload</h4>
					</div>
					<label className={styles.inputLabel} htmlFor="blogTitle">
						Title
					</label>
					<input
						type="text"
						name="blogTitle"
						className={styles.blogTitleInput}
						placeholder="Title"
					/>
				</div>
				<div className={styles.textAreaWrapper}>
					<label className={styles.inputLabel} htmlFor="blog">
						Blog
					</label>
					<input
						type="textarea"
						name="blog"
						className={styles.blogTextArea}
						placeholder="Blog"
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
