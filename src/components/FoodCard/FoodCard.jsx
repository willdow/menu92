import React from 'react';
import styles from './FoodCard.module.css';

const FoodCard = ({ food }) => {
	return (
		<div className={styles.foodCard}>
			<div className={styles.rating}>
				<span className={styles.star}>⭐</span>
				<span className={styles.ratingValue}>{food.rating}</span>
			</div>

			<div className={styles.imageContainer}>
				<img
					src={food.image}
					alt={food.name}
					className={styles.foodImage}
				/>
			</div>

			<div className={styles.cardContent}>
				<h4 className={styles.foodName}>{food.name}</h4>
				<p className={styles.foodDescription}>{food.description}</p>

				<div className={styles.cardFooter}>
					<span className={styles.price}>${food.price}</span>
					<button className={styles.addButton}>
						<span className={styles.addIcon}>+</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
