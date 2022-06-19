import React from 'react';
import styles from './blogUpload.module.scss';
import BackButton from '../landing/BackButton/BackButton';

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
						<BackButton />
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
				<div className={styles.input}>
					<label className={styles.inputLabel} htmlFor="blog">
						Blog
					</label>
					<input
						type="textarea"
						name="blog"
						className={styles.blogTextArea}
						placeholder="Blog"
					/>
					<div className={styles.sendButtonWrapper}>
						<button className={styles.sendButton}>Send</button>
					</div>
				</div>
			</form>
		</div>
	);
};
export default BlogUpload;
