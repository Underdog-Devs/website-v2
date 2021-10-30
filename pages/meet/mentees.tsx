import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../../components/siteHead';
import { Header } from '../../components/meet/header/Header';
import Spotlight from '../../components/meet/spotlight/Spotlight';

interface Props {

}

const Mentees: NextPage = ({ }: Props) => {
	return (
		<div>
			<SiteHead title="Underdogs Devs: Meet Our Mentees" description="A showcase of the mentees that have started a transition into the technology world" urlPath="meet/mentees" />
			<Header title="Meet Our Mentees" />
			{/* Spotlight is the contianer displaying the individual about mentees mentee components */}
			<Spotlight />
		</div>
	);
};

export default Mentees;
