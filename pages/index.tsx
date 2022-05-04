/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../components/siteHead';

// components
// import Hero from '../components/landing/hero';
import Mentor from '../components/landing/mentor';
import Recidivism from '../components/landing/recidivism';
import Mentee from '../components/landing/mentee';
import SocialMedia from '../components/landing/socialMedia';
import GetInvolved from '../components/landing/getInvolved';
import Hero from '../components/landing/hero';
import Testimonial from '../components/testimonial/Testimonial';

const Home: NextPage = () => (
	<>
		<SiteHead title="Underdog Devs" description="We are a group of software engineers supporting formerly incarcerated and disadvantaged aspiring developers" />
		<div>
			<Hero />
			<Recidivism />
			<Mentor />
			<Mentee />
			<SocialMedia />
			<GetInvolved />
			<Testimonial />
		</div>
	</>
);

export default Home;
