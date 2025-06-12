import React from 'react';
import styles from './Header.module.css';

const Header = ({ userName, userAvatar }) => {
	return (
		<div className={styles.header}>
			<span className={styles.greeting}>Hello, {userName}</span>
			<div className={styles.avatar}>
				<img src={userAvatar} alt={userName} />
			</div>
		</div>
	);
};

export default Header;
