import React, { ReactElement } from 'react';
import styles from './mentor.module.scss';

interface Props {}

function Mentor({}: Props): ReactElement {
	return (
		<div className={styles.container} id="mentor">
			<div className={styles.images}>
				<div className={styles.topImage} />
				<div className={styles.bottomImage} />
			</div>
			<div className={styles.text}>
				<h2>What is a Mentor?</h2>
				<p>
					Our mentors are industry experts. They are experienced software engineers from all over the industry
					who are committed to guiding the Underdog Devs. They have bi-weekly meetings with their mentees
					where they offer support in the form of encouragement, interview prep, resume analysis, and coding
					practice. The mentors develop relationships with the potential for referrals as their mentee
					develops and becomes job ready.
				</p>
				<p>
					Our mentors are industry experts. They are experienced software engineers from all over the industry
					who are committed to guiding the Underdog Devs. They have bi-weekly meetings with their mentees
					where they offer support in the form of encouragement, interview prep, resume analysis, and coding
					practice. The mentors develop relationships with the potential for referrals as their mentee
					develops and becomes job ready.
				</p>
			</div>
		</div>
	);
}

export default Mentor;
