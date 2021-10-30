import React from 'react';
import Head from 'next/head';

interface Props {
	title: string;
	description: string;
}

const SiteHead: React.FC<Props> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device.width, initial-scale=1" />
			<meta property="title" content={title} key="title" />
			<meta property="title" content={title} key="title" />
		</Head>
	);
};

export default SiteHead;
