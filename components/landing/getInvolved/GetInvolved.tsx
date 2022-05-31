import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './getInvolved.module.scss';

interface Props { }

function GetInvolved({ }: Props): ReactElement {
	return (
		<section className={styles.container} id="involved">
			<h3>Want to Get Involved?</h3>
			<p>Request more information
				<Link href="/signup" passHref>
					<a>
						here
					</a>
				</Link>
			</p>
			<p>Donate
				<Link href="/donate" passHref>
					<a>
						here
					</a>
				</Link>
			</p>
			<p> - OR - </p>

			<p>
				You can email the team directly at{'  '}
			</p>
			<a href="mailto:underdogdevsteam@gmail.com" target="_blank" rel="noreferrer">underdogdevsteam@gmail.com</a>
		</section>
	);
}

export default GetInvolved;
