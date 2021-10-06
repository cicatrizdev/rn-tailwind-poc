import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('pt-12 items-center')}>
				<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
					<Text style={tailwind('text-blue-800 font-semibold')}>Hello Tailwind ✌️✌️</Text>
				</View>
				<StatusBar style='auto' />
			</View>
		</SafeAreaView>
	);
}
