import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../../components/siteHead';
import { Header } from '../../components/meet/header/Header';
import Spotlight from '../../components/meet/spotlight/Spotlight';

interface Props {

}

const Mentors: NextPage = ({ }: Props) => {
	return (
		<div>
			<SiteHead title="Underdogs Devs: Meet Our Mentors" description="A showcase of a select few of the mentors we have teaching our mentees" urlPath="meet/mentors" />
			<Header title="Meet Our Mentors" />
			{/* Spotlight is the contianer displaying the individual about mentors mentee components */}
			<Spotlight />
		</div>
	);
};

export default Mentors;
