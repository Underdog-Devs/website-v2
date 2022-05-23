import React, { ReactNode } from 'react';
import Footer from './parts/footer';
import Navigation from './parts/navigation';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => (
	<main>
		<Navigation />
		{children}
		<Footer />
	</main>
);

export default Layout;
