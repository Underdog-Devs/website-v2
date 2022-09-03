import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../siteHead';
import Spotlight from '../meet/spotlight';
import SpotlightHeader from '../meet/spotlightHeader';

interface Props {

}

const Mentees: NextPage = ({ }: Props) => {
	return (
		<div>
			<SiteHead title="Underdog Devs: Meet Our Mentees" description="A showcase of the mentees that have started a transition into the technology world" urlPath="meet/mentees" />
			<SpotlightHeader title="Meet Our Mentees" />
			{/* Spotlight is the contianer displaying the individual about mentees mentee components */}
			<Spotlight />
		</div>
	);
};

export default Mentees;
