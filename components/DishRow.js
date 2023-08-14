import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRow = ({ image, description, name, price }) => {
	const [isPressed, setIsPressed] = useState(false);
	return (
		<>
			<TouchableOpacity
				onPress={() => setIsPressed(!isPressed)}
				className={`p-4 border border-gray-200 ${isPressed && 'border-b-0'}`}
			>
				<ScrollView>
					<View className="flex-row ">
						<View className="pr-2 flex-1">
							<Text className="text-lg mb-1">{name}</Text>
							<Text className="text-gray-400 mt-2">{description}</Text>
							<Text className="text-gray-400">{price} kr</Text>
						</View>
						<Image
							source={{
								uri: urlFor(image).url(),
							}}
							style={{
								borderWidth: 1,
								borderColor: '#F3F3F4',
							}}
							className="h-20 w-20 bg-gray-300 p-4"
						/>
					</View>
				</ScrollView>
			</TouchableOpacity>
			{isPressed && (
				<View className="px-4">
					<View className="flex-row items-center space-x-2 pb-3">
						<TouchableOpacity>
							<MinusCircleIcon
								size={40}
								color="#00CCBB"
								// color={items.lenght > 0 ? '#00CCBB' : 'gray'}
							/>
						</TouchableOpacity>

						<Text>0</Text>

						<TouchableOpacity>
							<PlusCircleIcon
								size={40}
								color="#00CCBB"
								// color={items.lenght > 0 ? '#00CCBB' : 'gray'}
							/>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	);
};

export default DishRow;
