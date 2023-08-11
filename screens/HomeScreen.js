import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import { SparklesIcon } from 'react-native-heroicons/solid';

export default function HomeScreen() {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			{/* Header */}
			<View>
				<View className="flex-row items-center mx-4 space-x-2 pb-3">
					<Image
						source={{
							uri: 'https://links.papareact.com/wru',
						}}
						className="w-7 h-7 bg-gray-300 p-4 rounded-full"
					/>
					<View>
						<Text className="font-bold text-xs text-gray-400">
							Deliver now!
						</Text>
						<Text className="font-bold text-xl">Current Location</Text>
						<SparklesIcon />
					</View>
				</View>
				<View></View>
			</View>
		</SafeAreaView>
	);
}
