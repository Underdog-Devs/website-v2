import React from 'react';
import { GetServerSideProps } from 'next';

import styles from './author.module.scss';

export const Blog = () => {
	return (
		<div className={styles.container} />
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context.params?.id as string;
	console.log(id);
	return {
		props: { id },
	};
};

export default Blog;
