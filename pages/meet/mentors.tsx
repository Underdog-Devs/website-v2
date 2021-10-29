import React, { ReactElement } from 'react';
import Layout from '../../components/Layout';
import { Header } from '../../components/meet/header/Header';
import Spotlight from '../../components/meet/spotlight/Spotlight';

interface Props {

}

function Mentors({ }: Props): ReactElement {
	return (
		<Layout>
			<div>
				<Header title={'Meet Our Mentors'}/>
				{/* Spotlight is the contianer displaying the individual about mentors mentee components */}
				<Spotlight />
			</div>
		</Layout>
	);
}

export default Mentors;
