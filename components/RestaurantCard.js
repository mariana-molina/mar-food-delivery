import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const RestaurantCard = ({
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
}) => {
	return (
		<TouchableOpacity>
			<Image
				source={{
					uri: imgUrl,
				}}
				className="h-36 w-36"
			/>
		</TouchableOpacity>
	);
};

export default RestaurantCard;
