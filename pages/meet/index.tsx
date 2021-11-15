import React, { ReactElement } from 'react';
import Quote from '../../components/quote/Quote';

interface Props {

}

function Meet({ }: Props): ReactElement {
	return (
		<div>
			Meet
			<Quote />
		</div>
	);
}

export default Meet;
