import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../../components/siteHead';
import Spotlight from '../../components/meet/spotlight';
import SpotlightHeader from '../../components/meet/spotlightHeader';

interface Props {

}

const Mentors: NextPage = ({ }: Props) => {
	return (
		<div>
			<SiteHead title="Underdog Devs: Meet Our Mentors" description="A showcase of a select few of the mentors we have teaching our mentees" urlPath="meet/mentors" />
			<SpotlightHeader title="Meet Our Mentors" />
			{/* Spotlight is the contianer displaying the individual about mentors mentee components */}
			<Spotlight />
		</div>
	);
};

export default Mentors;
