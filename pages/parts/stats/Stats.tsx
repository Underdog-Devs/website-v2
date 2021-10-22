import React, { ReactElement } from 'react';
import { BsFillPersonCheckFill, BsSlack, BsFillCalendarWeekFill } from 'react-icons/bs';
import styles from './stats.module.scss';

interface Props {}

function Stats({}: Props): ReactElement {
	return (
		<div className={styles.container}>
			<div className={styles.stat}>
				<div className={styles.icon}>
					<BsFillPersonCheckFill />
				</div>
				<h4>84</h4>
				<p>Mentees</p>
			</div>
			<div className={styles.stat}>
				<div className={styles.icon}>
					<BsFillPersonCheckFill />
				</div>
				<h4>168</h4>
				<p>Mentors</p>
			</div>
			<div className={styles.stat}>
				<div className={styles.icon}>
					<BsSlack />
				</div>
				<h4>23</h4>
				<p>Slack Channels</p>
			</div>
			<div className={styles.stat}>
				<div className={styles.icon}>
					<BsFillCalendarWeekFill />
				</div>
				<h4>14</h4>
				<p>Monthly Events</p>
			</div>
		</div>
	);
}

export default Stats;
