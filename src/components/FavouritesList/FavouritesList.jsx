import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import styles from './FavouritesList.module.css';

const FavouritesList = () => {
	const favourites = [
		{
			id: 1,
			name: 'Kyoto Super Set',
			description: 'Salmon, Eel, Crab',
			price: 100,
			rating: 4.9,
			image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
		},
		{
			id: 2,
			name: 'Kakumi Special',
			description: 'Salmon, Tuna, Crab',
			price: 50,
			rating: 4.9,
			image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
		},
	];

	return (
		<div className={styles.favouritesContainer}>
			<h3 className={styles.favouritesTitle}>Favourites</h3>
			<div className={styles.favouritesList}>
				{favourites.map((food) => (
					<FoodCard key={food.id} food={food} />
				))}
			</div>
		</div>
	);
};

export default FavouritesList;
