/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import type { NextPage } from 'next';
// import styles from './index.module.scss';

// components
// import Hero from '../components/landing/hero';
import Mentor from '../components/landing/mentor';
import Recidivism from '../components/landing/recidivism';
import Mentee from '../components/landing/mentee';
import SocialMedia from '../components/landing/socialMedia';
import GetInvolved from '../components/landing/getInvolved';
import Hero from '../components/landing/hero';
import BlogUpload from '../components/blogUpload';

// import Testimonials from '../components/landing/testimonials/Testimonials';

const Home: NextPage = () => (
	<>
		<div>
			<Hero />
			<Recidivism />
			<Mentee />
			<Mentor />
			<BlogUpload />
			{/* commented out until we have testimonials to display */}
			{/* <div className={styles.testimonialsBanner}>
				<Testimonials content={3} />
			</div> */}
			<SocialMedia />
			<GetInvolved />
		</div>
	</>
);

export default Home;
