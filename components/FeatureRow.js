import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeatureRow = ({ title, description, id }) => {
	return (
		<View>
			<View className="flex-row mt-4 items-center justify-between px-4">
				<Text className="text-lg font-bold">{title}</Text>
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
				<RestaurantCard
					id="123"
					imgUrl="https://links.papareact.com/gn7"
					title="YO sushi"
					rating={4.5}
					genre="Japanese"
					address="Av. siempre viva"
					short_description="this is a restaurant description"
					dishes=""
					long={123123}
					lat={1231231231}
				/>
				<RestaurantCard
					id="123"
					imgUrl="https://links.papareact.com/gn7"
					title="YO sushi"
					rating={4.5}
					genre="Japanese"
					address="Av. siempre viva"
					short_description="this is a restaurant description"
					dishes=""
					long={123123}
					lat={1231231231}
				/>
				<RestaurantCard
					id="123"
					imgUrl="https://links.papareact.com/gn7"
					title="YO sushi"
					rating={4.5}
					genre="Japanese"
					address="Av. siempre viva"
					short_description="this is a restaurant description"
					dishes=""
					long={123123}
					lat={1231231231}
				/>
			</ScrollView>
		</View>
	);
};

export default FeatureRow;
