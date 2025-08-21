import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Card from '../components/Card';
import { goals } from '../data/goals';
import { calculateProgress, formatCurrency, estimateMonthsToGoal } from '../lib/utils';

export default function GoalDetailScreen({ route }) {
	const { id } = route.params || {};
	const goal = goals.find((g) => g.id === id) || goals[0];
	const progress = calculateProgress(goal.currentAmount, goal.totalAmount);
	const months = estimateMonthsToGoal({ currentAmount: goal.currentAmount, totalAmount: goal.totalAmount, monthlyContribution: 1200 });

	return (
		<SafeAreaView className="flex-1 bg-background">
			<View className="px-5 pt-4">
				<Text className="text-white text-2xl font-bold">{goal.title}</Text>
				<Text className="text-secondaryText">{goal.category}</Text>
			</View>
			<View className="px-5 mt-4">
				<Card>
					<Text className="text-white text-lg font-semibold">Progress</Text>
					<View className="h-2 bg-[#333] rounded-full mt-2 overflow-hidden">
						<View style={{ width: `${progress * 100}%` }} className="h-2 bg-primary" />
					</View>
					<View className="flex-row justify-between mt-3">
						<Text className="text-white">{formatCurrency(goal.currentAmount)}</Text>
						<Text className="text-secondaryText">{formatCurrency(goal.totalAmount)}</Text>
					</View>
				</Card>
			</View>
			<View className="px-5 mt-4">
				<Card>
					<Text className="text-secondaryText">Estimated time with $1,200/mo</Text>
					<Text className="text-white text-2xl font-bold mt-1">{months === Infinity ? 'N/A' : `${months} months`}</Text>
				</Card>
			</View>
		</SafeAreaView>
	);
}