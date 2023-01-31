import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import * as ga from '../lib/ga';

// styles
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url:string) => {
			ga.pageview(url);
		};
		// When the component is mounted, subscribe to router changes
		// and log those page views
		router.events.on('routeChangeComplete', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
