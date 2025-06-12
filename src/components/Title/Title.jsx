import React from 'react';
import styles from './Title.module.css';

const Title = () => {
	return (
		<div className={styles.titleContainer}>
			<h1 className={styles.title}>
				Enjoy <span className={styles.highlight}>Japanese</span>
				<br />
				Taste in Your Town
			</h1>
		</div>
	);
};

export default Title;
