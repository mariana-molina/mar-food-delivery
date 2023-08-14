import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
	const items = useSelector(state => selectBasketItems(state));
	const navigation = useNavigation();
	const total = useSelector(state => selectBasketTotal(state));
	return (
		<View className="absolute bottom-10 w-full z-50">
			<TouchableOpacity className="flex-row bg-[#00CCBB] rounded-md items-center mx-5 p-4 space-x-1 ">
				<Text className="text-white font-extrabold text-lg bg-[#319f96] py-1 px-2">
					{items.length}
				</Text>
				<Text className="text-white font-extrabold text-lg text-center flex-1">
					View Basket
				</Text>
				<Text className="text-white font-bold text-lg">{total} kr</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BasketIcon;
