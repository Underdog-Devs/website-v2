/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import type { NextPage } from 'next';

// components
// import Hero from '../components/landing/hero';
import Mentor from '../components/landing/mentor';
import Recidivism from '../components/landing/recidivism';
import Mentee from '../components/landing/mentee';
import SocialMedia from '../components/landing/socialMedia';
import GetInvolved from '../components/landing/getInvolved';
import Hero from '../components/landing/hero';
// import Testimonials from '../components/landing/testimonials/Testimonials';

const Home: NextPage = () => (
	<>
		<div>
			<Hero />
			<Recidivism />
			<Mentee />
			<Mentor />
			{/* commented out until we have testimonials to display */}
			{/* <Testimonials content={3} /> */}
			<SocialMedia />
			<GetInvolved />
		</div>
	</>
);

export default Home;
