import React, { ReactElement } from 'react';
import styles from './body.module.scss';

interface Props {}

function body({}: Props): ReactElement {
	return <div className={styles.container} />;
}

export default body;
