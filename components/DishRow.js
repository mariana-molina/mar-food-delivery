import { View, Text } from 'react-native';
import React from 'react';

const DishRow = ({ image, description, name, price }) => {
	return (
		<View>
			<Text>{name}</Text>
		</View>
	);
};

export default DishRow;
