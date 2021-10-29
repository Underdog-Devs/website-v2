import React, { ReactNode } from 'react';
import Navigation from '../pages/parts/navigation/Navigation';
import Footer from '../pages/parts/footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({
	children,
}: Props) => (
	<main>
		<Navigation />
		{children}
		<Footer />
	</main>
);

export default Layout;
