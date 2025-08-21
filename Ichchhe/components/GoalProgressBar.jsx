import React from 'react';
import { View, Text } from 'react-native';

export default function GoalProgressBar({ current = 0, total = 1, highlight = false }) {
	const ratio = total > 0 ? Math.min(current / total, 1) : 0;
	return (
		<View className={`w-full ${highlight ? 'bg-[#25422c]' : 'bg-[#2a2a2a]'} rounded-xl p-3`}>
			<View className="w-full h-2 bg-[#3a3a3a] rounded-full overflow-hidden">
				<View style={{ width: `${ratio * 100}%` }} className={`h-2 ${highlight ? 'bg-[#9FE870]' : 'bg-primary'}`} />
			</View>
			<View className="flex-row justify-between mt-2">
				<Text className="text-white opacity-80 text-xs">${current.toLocaleString()}</Text>
				<Text className="text-white opacity-60 text-xs">${total.toLocaleString()}</Text>
			</View>
		</View>
	);
}