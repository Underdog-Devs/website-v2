import React from 'react';

interface Props {
	title: string;
	description: string;
	urlPath?: string;
}

const SiteHead: React.FC<Props> = ({ title, description, urlPath }) => {
	const siteImage = '/images/twitterheader.png';
	SiteHead.defaultProps = {
		urlPath: '',
	};
	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta property="title" content={title} key="title" />
			<meta property="title" content={title} key="title" />
			<meta charSet="utf-8" />
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/images/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/images/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/images/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/images/safari-pinned-tab.svg"
				color="#d4d4d4"
			/>
			<meta name="msapplication-TileColor" content="#d4d4d4" />
			<meta name="theme-color" content="#d4d4d4" />
			<link rel="icon" href="/favicon.ico" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary" key="twcard" />
			<meta name="twitter:creator" content="UnderdogDevs" key="twhandle" />

			{/* Open Graph */}
			<meta property="og:title" content={title} key="ogtitle" />
			<meta property="og:description" content={description} key="ogdesc" />
			<meta property="og:site_name" content="Underdog Devs" key="ogsitename" />
			<meta
				property="og:url"
				content={`https://underdogdevs.org/${urlPath}`}
				key="ogurl"
			/>
			<meta property="og:image" content={siteImage} key="ogimage" />
		</>
	);
};

export default SiteHead;
