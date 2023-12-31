import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { urlFor } from '../sanity';

export default function CategoriesCard({ imgUrl, title }) {
	return (
		<TouchableOpacity className="mr-2 relative">
			<Image
				source={{ uri: urlFor(imgUrl).url() }}
				className="h-20 w-20 rounded"
			/>
			<Text className=" absolute bottom-1 left-1 text-black bg-white rounded font-bold">
				{title}
			</Text>
		</TouchableOpacity>
	);
}
