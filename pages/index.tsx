/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import Head from 'next/head';
// styles
import React from 'react';
import styles from '../styles/Home.module.scss';
// components
import Header from './parts/header/Header';
import Hero from '../components/hero/hero';
import Stats from '../components/stats/Stats';
import Mentor from '../components/mentor/Mentor';
import Footer from './parts/footer/Footer';
import Mentee from '../components/mentee/Mentee';
import SocialMedia from '../components/socialMedia/SocialMedia';
import GetInvolved from '../components/getInvolved/GetInvolved';

const Home: NextPage = () => (
	<div className={styles.container}>
		<Head>
			<title>Underdog Devs</title>
			<meta name="description" content="Underdog Devs Information" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Open+Sans:wght@400;600;700&family=Quicksand:wght@400;700&family=Raleway:wght@400;700&family=Roboto:ital,wght@0,400;1,700&family=Source+Sans+Pro:wght@400;700&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<Header />
		<Hero />
		<Stats />
		<Mentor />
		<Mentee />
		<SocialMedia />
		<GetInvolved />
		<Footer />
	</div>
);

export default Home;
