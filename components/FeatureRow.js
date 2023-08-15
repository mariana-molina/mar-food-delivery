import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import client from '../sanity';

const FeatureRow = ({ title, description, id }) => {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		client
			.fetch(
				`
		*[_type == "featured" && _id == $id] {
			..., restaurants[]-> {
				..., dishes[]->,
				type-> {name}
			}
		} [0]
		`,
				{ id }
			)
			.then(data => setRestaurants(data));
	}, [id]);

	return (
		<View>
			<View className="flex-row mt-4 items-center justify-between px-4 ">
				<Text className="text-lg font-bold ">{title}</Text>
				<ArrowRightIcon size={30} color="#00CCBB" />
			</View>
			<Text className="text-xs px-4 text-gray-500">{description}</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				showsHorizontalScrollIndicator={false}
				className="pt-4"
			>
				{/* RestaurantsCards */}
				{restaurants.restaurants?.map(restaurant => {
					return (
						<RestaurantCard
							key={restaurant._id}
							id={restaurant._id}
							imgUrl={restaurant?.image}
							title={restaurant.name}
							rating={restaurant.rating}
							genre={restaurant.type?.name}
							address={restaurant.address}
							short_description={restaurant.short_description}
							dishes={restaurant.dishes}
							long={restaurant.long}
							lat={restaurant.lat}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default FeatureRow;
