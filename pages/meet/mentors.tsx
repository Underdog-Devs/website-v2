import React, { ReactElement } from 'react';
import { Header } from '../../components/meet/header/Header';
import Spotlight from '../../components/meet/spotlight/Spotlight';

interface Props {

}

function Mentors({ }: Props): ReactElement {
	return (
		<div>
			<Header title="Meet Our Mentors" />
			{/* Spotlight is the contianer displaying the individual about mentors mentee components */}
			<Spotlight />
		</div>
	);
}

export default Mentors;
