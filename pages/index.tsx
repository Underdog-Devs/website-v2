/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import Head from 'next/head';
// styles
import React from 'react';
import styles from '../styles/Home.module.scss';
// components
import Hero from '../components/landing/hero/hero';
import Stats from '../components/landing/stats/Stats';
import Mentor from '../components/landing/mentor/Mentor';
import Mentee from '../components/landing/mentee/Mentee';
import SocialMedia from '../components/landing/socialMedia/SocialMedia';
import GetInvolved from '../components/landing/getInvolved/GetInvolved';

const Home: NextPage = () => (
	<>
		<Head>
			<title>Underdog Devs</title>
			<meta name="description" content="Underdog Devs Info" />
		</Head>
		<div className={styles.container}>
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
