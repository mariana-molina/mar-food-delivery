import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import {
	ArrowLeftIcon,
	ChevronRightIcon,
	QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const {
		params: {
			id,
			imgUrl,
			title,
			rating,
			genre,
			address,
			short_description,
			dishes,
			long,
			lat,
		},
	} = useRoute();

	return (
		<ScrollView>
			<View>
				<Image
					source={{
						uri: urlFor(imgUrl).url(),
					}}
					className="bg-gray-300 h-56 w-full"
				/>
				<TouchableOpacity
					onPress={navigation.goBack}
					className="absolute top-10 left-4 rounded-full bg-gray-100 p-2"
				>
					<ArrowLeftIcon size={25} color="#00CCBB" />
				</TouchableOpacity>
			</View>
			<View>
				<View className="px-4 pt-2">
					<Text className="text-3xl font-bold">{title}</Text>
					<View className="flex-row space-x-2 my-1">
						<View className="flex-row items-center space-x-1">
							<StarIcon color="green" opacity={0.5} size={22} />
							<Text className="text-gray-600 text-xs">
								<Text className="text-green-700">{rating}</Text> - {genre}
							</Text>
						</View>

						<View className="flex-row items-center space-x-1">
							<MapPinIcon color="gray" opacity={0.6} size={22} />
							<Text className="text-gray-600 text-xs">{address}</Text>
						</View>
					</View>
					<Text className="pb-4 mt-2 text-gray-600">{short_description}</Text>
				</View>

				<TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
					<QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
					<Text className="flex-1 font-bold text-md pl-2">
						Have you any allergies?
					</Text>
					<ChevronRightIcon size={20} color="#00CCBB" />
				</TouchableOpacity>

				<View>
					<Text className="text-xl font-bold px-4 pt-6 pb-4">Menu</Text>

					{/* DISHES */}
					{dishes.map(dish => (
						<DishRow
							key={dish._id}
							image={dish.image}
							description={dish.short_description}
							name={dish.name}
							price={dish.price}
						/>
					))}
				</View>
			</View>
		</ScrollView>
	);
};

export default RestaurantScreen;
