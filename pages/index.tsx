/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../components/siteHead';

// components
import Hero from '../components/landing/hero/hero';
import Stats from '../components/landing/stats/Stats';
import Mentor from '../components/landing/mentor/Mentor';
import Mentee from '../components/landing/mentee/Mentee';
import SocialMedia from '../components/landing/socialMedia/SocialMedia';
import GetInvolved from '../components/landing/getInvolved/GetInvolved';

const Home: NextPage = () => (
	<>
		<SiteHead title="Underdogs Devs" description="We are a group of software engineers supporting formerly incarcerated and disadvantaged aspiring developers" />
		<div>
			<Hero />
			<Stats />
			<Mentor />
			<Mentee />
			<SocialMedia />
			<GetInvolved />
		</div>
	</>
);

export default Home;
