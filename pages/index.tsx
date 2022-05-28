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

const Home: NextPage = () => (
	<>
		<div>
			<Hero />
			<Recidivism />
			<Mentor />
			<Mentee />
			<SocialMedia />
			<GetInvolved />
		</div>
	</>
);

export default Home;
