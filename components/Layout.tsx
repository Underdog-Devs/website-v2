import React, { ReactNode } from 'react';
import Footer from '../pages/parts/footer';
import Navigation from '../pages/parts/navigation';

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
