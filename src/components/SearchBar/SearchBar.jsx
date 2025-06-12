import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder = 'Find your meal.....' }) => {
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchBox}>
				<svg
					className={styles.searchIcon}
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
				>
					<circle cx="11" cy="11" r="8" stroke="#bbb" strokeWidth="2" />
					<path d="m21 21-4.35-4.35" stroke="#bbb" strokeWidth="2" />
				</svg>
				<input
					type="text"
					placeholder={placeholder}
					className={styles.searchInput}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
