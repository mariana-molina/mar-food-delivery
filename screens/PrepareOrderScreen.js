import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const PrepareOrderScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Delivery');
		}, 4000);
	}, []);

	return (
		<SafeAreaView className="flex-1 bg-[#00CCBB] items-center justify-center">
			<Animatable.Image
				source={require('../assets/image_processing.gif')}
				animation="slideInUp"
				iterationCount={1}
				className="h-96 w-96"
			/>
			<Animatable.Text
				animation="slideInUp"
				iterationCount={1}
				className="text-lg my-10 text-center font-bold  text-white"
			>
				Waiting to the restaurant to accept your order
			</Animatable.Text>
		</SafeAreaView>
	);
};

export default PrepareOrderScreen;
