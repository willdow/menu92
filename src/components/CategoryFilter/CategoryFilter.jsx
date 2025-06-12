import React, { useState } from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = () => {
	const [activeCategory, setActiveCategory] = useState('sushi');

	const categories = [
		{ id: 'sushi', name: 'Sushi', emoji: '🍣' },
		{ id: 'ramen', name: 'Ramen', emoji: '🍜' },
		{ id: 'tempura', name: 'Tempura', emoji: '🍤' },
	];

	return (
		<div className={styles.categoryContainer}>
			<h3 className={styles.categoryTitle}>Category</h3>
			<div className={styles.categoryList}>
				{categories.map((category) => (
					<button
						key={category.id}
						className={`${styles.categoryButton} ${
							activeCategory === category.id ? styles.active : ''
						}`}
						onClick={() => setActiveCategory(category.id)}
					>
						<span className={styles.categoryEmoji}>{category.emoji}</span>
						<span className={styles.categoryName}>{category.name}</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default CategoryFilter;
