import Image from 'next/image';
import React from 'react';
import styles from './projectUnderdog.module.scss';

const ProjectUnderdog = () => {
	return (
		<div className={styles.container}>
			<h2>Project Underdog</h2>
			<div className={styles.about}>
				<div className={styles.aboutText}>
					<ul className={styles.mainList}>
						<li>A barrier for many Underdog Devs to getting a full-time software job is having the time to practice and become interview-ready, while also supporting themselves and their families financially. To meet this need, Underdog Devs runs a 3+ month stipend program to support aspiring software engineers in practicing their craft full-time with the goal of securing a software engineering job by the end of the program.</li>
						<li>
							Candidates apply and are selected based on a set of requirements
						</li>
						<li>
							Mentees receive a 3-month minimum stipend based on current income, disbursed monthly, conditional on consistent participation in the program.
						</li>
						<li>
							Mentees are paired with a set of mentors, who meet at least 1 hour per week per mentor, 5 hours per week, for rigorous 1:1 pair programming and feedback on practice problems and homework.
						</li>
						<li>
							Mentees are responsible for structuring the remainder of their 40 hour / week study schedule, consisting of:
						</li>
						<ul className={styles.subList}>
							<li>Online courses or bootcamps
							</li>
							<li>Homework from mentors
							</li>
							<li>Additional practice problems
							</li>
							<li>Pair programming with other mentees in study groups
							</li>
							<li>Work on portfolio projects to showcase on GitHub and their resume
							</li>
						</ul>
						<li>
							When interview-ready, the Underdog Devs network will support the mentee in getting referrals to and applying to software jobs.
						</li>
					</ul>
				</div>
				<div className={styles.aboutImage}>
					<Image
						className={styles.together}
						src="/images/success.jpg"
						alt="climbing the stairs of success"
						height={400}
						width={600}
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectUnderdog;
