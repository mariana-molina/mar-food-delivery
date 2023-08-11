import {
	View,
	Text,
	SafeAreaView,
	Image,
	TextInput,
	ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import {
	ChevronDownIcon,
	UserIcon,
	MagnifyingGlassIcon,
	AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';

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
					<View className="flex-1">
						<Text className="font-bold text-xs text-gray-400">
							Deliver now!
						</Text>
						<Text className="font-bold text-xl">
							Current Location
							<ChevronDownIcon padding-left={2} size={20} color="#00CCBB" />
						</Text>
					</View>
					<UserIcon size={35} color="#00CCBB" />
				</View>
				<View>
					<View className="flex-row items-center space-x-2 pb-2 mx-4">
						<View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3">
							<MagnifyingGlassIcon size={20} color="gray" />
							<TextInput
								className=""
								keyboardType="default"
								placeholder="Restaurants and cuisines"
							></TextInput>
						</View>
						<AdjustmentsVerticalIcon color="#00CCBB" />
					</View>
				</View>
			</View>

			{/* Body */}
			<ScrollView className="bg-gray-100">
				{/* Categories */}
				<Categories />

				{/* Feature Row */}
				<FeatureRow
					title="Feature"
					description="Paid placement from our partners"
					id="123"
				/>
				<FeatureRow
					title="Feature"
					description="Paid placement from our partners"
					id="1234"
				/>
				<FeatureRow
					title="Feature"
					description="Paid placement from our partners"
					id="12345"
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
