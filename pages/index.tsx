/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../components/siteHead';

// components
// import Hero from '../components/landing/hero';
import Stats from '../components/landing/stats';
import Mentor from '../components/landing/mentor';
import Mentee from '../components/landing/mentee';
import SocialMedia from '../components/landing/socialMedia';
import GetInvolved from '../components/landing/getInvolved';
import NewHero from '../components/landing/hero/newHero';

const Home: NextPage = () => (
	<>
		<SiteHead title="Underdogs Devs" description="We are a group of software engineers supporting formerly incarcerated and disadvantaged aspiring developers" />
		<div>
			<NewHero />
			<Stats />
			<Mentor />
			<Mentee />
			<SocialMedia />
			<GetInvolved />
		</div>
	</>
);

export default Home;
