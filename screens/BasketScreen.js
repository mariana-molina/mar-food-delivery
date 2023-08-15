import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import {
	removeFromBasket,
	selectBasketItems,
	selectBasketTotal,
} from '../features/basketSlice';
import SafeViewAndroid from '../components/SafeViewAndroid';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const BasketScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const items = useSelector(state => selectBasketItems(state));
	const restaurant = useSelector(state => selectRestaurant(state));
	const basketTotal = useSelector(state => selectBasketTotal(state));
	const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

	useEffect(() => {
		const groupedItems = items.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});
		setGroupedItemsInBasket(groupedItems);

		if (items.length === 0) {
			navigation.navigate('Home');
		}
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
				<ScrollView className="divide-y divide-gray-200">
					{Object.entries(groupedItemsInBasket).map(([key, items]) => {
						return (
							<View
								key={key}
								className="flex-row items-center space-x-3 py-2 bg-white px-5"
							>
								<Text className="text-[#00CCBB]">{items.length} x </Text>
								<Image
									source={{
										uri: urlFor(items[0]?.image).url(),
									}}
									className="h-12 w-12 rounded-full"
								/>
								<Text className="flex-1">{items[0].name}</Text>
								<Text className="text-gray-600">{items[0].price} kr</Text>

								<TouchableOpacity
									onPress={() => dispatch(removeFromBasket({ id: key }))}
								>
									<Text className="text-xs text-[#00CCBB]">Remove</Text>
								</TouchableOpacity>
							</View>
						);
					})}
				</ScrollView>
				<View className=" bg-white p-5 mt-5 space-y-4">
					<View className="flex-row justify-between">
						<Text className="text-gray-400 flex-1 ">Subtotal</Text>
						<Text className="text-gray-400">{basketTotal} kr</Text>
					</View>
					<View className="flex-row justify-between">
						<Text className="text-gray-400 flex-1 ">Deliver fee</Text>
						<Text className="text-gray-400">40 kr</Text>
					</View>
					<View className="flex-row justify-between">
						<Text className=" flex-1  ">Order total</Text>
						<Text className="font-extrabold">{basketTotal + 40} kr</Text>
					</View>

					<TouchableOpacity
						className="bg-[#00CCBB] rounded-lg py-5"
						onPress={() => navigation.navigate('PrepareOrder')}
					>
						<Text className="text-center text-lg font-bold text-white">
							Place your order
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default BasketScreen;
