import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
	const navigation = useNavigation();
	const restaurant = useSelector(state => selectRestaurant(state));
	return (
		<View className="bg-[#00CCBB] flex-1">
			<SafeAreaView className="z-50">
				<View className="flex-row items-center p-5 justify-between">
					<TouchableOpacity onPress={() => navigation.navigate('Home')}>
						<XMarkIcon size={30} color="white" />
					</TouchableOpacity>
					<Text className="font-light text-lg text-white ">Order help</Text>
				</View>
				<View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
					<View className="flex-row justify-between">
						<View className="">
							<Text className="text-gray-500 text-lg">Estimated arrival</Text>
							<Text className="text-4xl font-bold">40-55 minutes</Text>
						</View>
						<Image
							source={{
								uri: 'https://links.papareact.com/fls',
							}}
							className="h-20 w-20"
						/>
					</View>
					<Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
					<Text className="mt-3 text-gray-500">
						Your order at {restaurant.title} is being prepared
					</Text>
				</View>
			</SafeAreaView>

			{/* <MapView
				initialRegion={{
					latitude: restaurant.latitude,
					longitude: restaurant.longitude,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				className="flex-1 -mt-10 z-0"
				mapType="mutedStandard"
			>
				<Marker
					coordinate={{
						latitude: restaurant.lat,
						longitude: restaurant.long,
					}}
					title={restaurant.title}
					description={restaurant.short_description}
					identifier="origin"
					pinColor="#00CCBB"
				/>
			</MapView> */}
			<View className="flex-1 -mt-10 z-0">
				<Text> </Text>
			</View>

			<SafeAreaView className="flex-row items-center bg-white space-x-5 h-27">
				<Image
					source={{
						uri: 'https://links.papareact.com/wru',
					}}
					className="h-12 w-12 ml-5 p-4 rounded-full bg-gray-300"
				/>
				<View className="flex-1">
					<Text className="text-lg ">Mariana Molina</Text>
					<Text className="text-gray-400">Your rider</Text>
				</View>
				<Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
			</SafeAreaView>
		</View>
	);
};

export default DeliveryScreen;
