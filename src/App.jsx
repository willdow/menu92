import React from 'react';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import FavouritesList from './components/FavouritesList/FavouritesList';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import './App.css';

const mockUser = {
	name: 'Jonathan',
	avatar:
		'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
};

function App() {
	return (
		<div className="app">
			<div className="phone-container">
				<Header userName={mockUser.name} userAvatar={mockUser.avatar} />
				<Title />
				<SearchBar />
				<CategoryFilter />
				<FavouritesList />
				<BottomNavigation />
			</div>
		</div>
	);
}

export default App;
