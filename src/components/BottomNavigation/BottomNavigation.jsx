import React, { useState } from 'react';
import styles from './BottomNavigation.module.css';

const BottomNavigation = () => {
	const [activeTab, setActiveTab] = useState('home');

	const navigationItems = [
		{ id: 'home', icon: '🏠' },
		{ id: 'menu', icon: '📋' },
		{ id: 'cart', icon: '🛒' },
		{ id: 'profile', icon: '👤' },
	];

	return (
		<div className={styles.bottomNav}>
			{navigationItems.map((item) => (
				<button
					key={item.id}
					className={`${styles.navItem} ${
						activeTab === item.id ? styles.active : ''
					}`}
					onClick={() => setActiveTab(item.id)}
				>
					<span className={styles.navIcon}>{item.icon}</span>
				</button>
			))}
		</div>
	);
};

export default BottomNavigation;
