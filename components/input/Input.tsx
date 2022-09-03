import React from 'react';
import styles from './input.module.scss';

type Props = {
	labelFor: string;
	labelText: string;
	children: any;
}

export const Input = (props: Props) => {
	const { labelFor, labelText, children } = props;
	return (
		<div className={styles.input}>
			<label className={styles.labels} htmlFor={labelFor}>{labelText}
			</label>
			{children}
		</div>
	);
};
