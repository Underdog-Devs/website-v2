import React, { ReactElement } from 'react';
import Spotlight from '../../components/meet/spotlight/Spotlight';

interface Props {

}

function Mentors({ }: Props): ReactElement {
	return (
		<div>
			{[1, 2, 3, 4, 5, 6, 7, 8].map((profile, idx) => {
				const imageType = `_type${Math.floor(Math.random() * 4) + 1}`;

				return (
					<Spotlight key={idx} imageType={imageType} />
				);
			})}
		</div>
	);
}

export default Mentors;
