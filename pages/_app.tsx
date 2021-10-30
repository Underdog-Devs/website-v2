import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

// styles
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />   
		</Layout>
	);
}
export default MyApp;
