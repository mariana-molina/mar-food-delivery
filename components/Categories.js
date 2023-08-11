import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoriesCard from './CategoriesCard';

export default function Categories() {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				paddingTop: 10,
				paddingHorizontal: 15,
			}}
		>
			<CategoriesCard
				imgUrl="https://links.papareact.com/gn7"
				title="testing 1"
			/>
			<CategoriesCard
				imgUrl="https://links.papareact.com/gn7"
				title="testing 2"
			/>
			<CategoriesCard
				imgUrl="https://links.papareact.com/gn7"
				title="testing 3"
			/>
		</ScrollView>
	);
}
