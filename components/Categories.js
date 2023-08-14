import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoriesCard from './CategoriesCard';
import client from '../sanity';

export default function Categories() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		client
			.fetch(
				`
		*[_type == "category"]
		`
			)
			.then(data => setCategories(data));
	}, []);

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				paddingTop: 10,
				paddingHorizontal: 15,
			}}
		>
			{categories.map(category => {
				return (
					<CategoriesCard
						key={category._id}
						imgUrl={category.image}
						title={category.name}
					/>
				);
			})}
		</ScrollView>
	);
}
