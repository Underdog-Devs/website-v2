import React, { ReactElement } from 'react';
import styles from './recidivism.module.scss';

interface Props { }

function Recidivism({ }: Props): ReactElement {
	return (
		<section className={styles.container}>
			<article className={styles.left}>
				<h3>Recidivism</h3>
				<p>
					According to data from the U.S. Bureau of Justice Statistics (BJS), 67.8% of released state prisoners
					were arrested for a new crime within three years, and 76.7% were arrested within five years (Durose,
					Cooper, & Snyder, 2014). Reducing recidivism not only protects society at large, but also improves the
					life quality of individual ex-prisoners.
				</p>
				<p>
					Incarceration rates in the U.S. began increasing dramatically in the 1990s. The U.S. has the highest
					prison population of any country, comprising 25% of the world’s prisoners.{' '}
				</p>
				<p>Out of a sample of 401,288 prisoners state prisoners released in 2005:</p>
				<ul>
					<li>68% of released prisoners were arrested within 3 years.</li>
					<li>79% of released prisoners were arrested within 6 years.</li>
					<li>83% of released prisoners were arrested within 9 years.</li>
				</ul>
				<p>Using this study as a basepoint, one could state that the national recidivism rate is 83%.</p>
				<a href="https://www.prisonpolicy.org/research/recidivism_and_reentry/" rel="noreferrer" target="_blank">
					recidivism and reentry on prisonpolicy.org
				</a>
				<a
					href="https://prisoninsight.com/recidivism-the-ultimate-guide/#tab-con-9"
					rel="noreferrer"
					target="_blank"
				>
					recidivism the ultimate guide on prisoninsight.com
				</a>

			</article>
			<article className={styles.right}>
				<h3>Unemployment and Poverty</h3>
				<p>
					Employment has long been recognized as having a negative correlation with crime (Uggen, 1999; Uggen et
					al., 2005).
				</p>
				<a
					href="https://www.ebpsociety.org/blog/education/297-employment-recidivism"
					rel="noreferrer"
					target="_blank"
				>
					employment recidivism on ebpsociety.org
				</a>{' '}
				<p>
					Researchers also have found that employment is associated with reduced recidivism(Skardhamar & Telle,
					2012). The strongest predictor for recidivism: poverty + unemployment.
				</p>
				<a
					href="https://www.ojp.gov/ncjrs/virtual-library/abstracts/poverty-state-capital-and-recidivism-among-women-offenders"
					rel="noreferrer"
					target="_blank"
				>
					poverty state capital and recidivism among women offenders on ojp.gov
				</a>{' '}

			</article>
		</section>
	);
}

export default Recidivism;
