import React from 'react';
import styles from './hero.module.scss';

interface Props {

}

const Hero: React.FC<Props> = ({ }) => {
	return (
		<section className={styles.container}>
			<div className={styles.aboutText}>
				<div className={styles.heading}>
					<div className={styles.logoContainer}>
						<img
							className={styles.logo}
							src="/images/icon-03.png"
							alt="Your Name"
							height={75}
							width={75}
						/>
					</div>
					<h3>About</h3>
				</div>
				<div className={styles.about}>
					<h2>Underdog <br />Devs</h2>
					<p className={styles.about}>
						We are a group of software engineers helping aspiring developers who are either formerly incarcerated or from an economically disadvantaged background. <br /> We are creatting opportunities in tech for people who might not otherwise get an opportunity <br /> We were founded in September of 2020 <br /> We
						currently depend on 100% volunteer support
					</p>
				</div>
			</div>
			<div
				className={styles.aboutImage}
			>
				<img
					className={styles.imageLogo}
					src="/images/underdogdevs-03.png"
					alt="Your Name"
					height={300}
					width={300}
				/>
			</div>

		</section>
	);
};

export default Hero;
