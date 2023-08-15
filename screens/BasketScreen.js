import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import SafeViewAndroid from '../components/SafeViewAndroid';
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const items = useSelector(state => selectBasketItems(state));
	const restaurant = useSelector(state => selectRestaurant(state));
	const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

	useEffect(() => {
		const groupedItems = items.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});
		setGroupedItemsInBasket(groupedItems);
	}, [items]);

	return (
		<SafeAreaView className="flex-1" style={SafeViewAndroid.AndroidSafeArea}>
			<View className="flex-1 bg-gray-100">
				<View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
					<View>
						<Text className="text-lg font-bold text-center">Basket</Text>
						<Text className="text-center text-gray-400">
							{restaurant.title}
						</Text>
					</View>
					<TouchableOpacity
						onPress={navigation.goBack}
						className="absolute top-3 right-5 bg-gray-100 rounded-full"
					>
						<XCircleIcon height={50} width={50} color="#00CCBB" />
					</TouchableOpacity>
				</View>

				<View className="flex-row items-center space-x-4 my-5 px-4 py-3 bg-white">
					<Image
						source={{
							uri: 'https://links.papareact.com/wru',
						}}
						className="h-7 w-7 p-4 rounded-full bg-gray-300"
					/>
					<Text className="flex-1">Deliver in 15-30 min</Text>
					<TouchableOpacity>
						<Text className="text-[#00CCBB]">Change</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default BasketScreen;
