import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Card from '../components/Card';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { goals } from '../data/goals';
import { monthlySavingsRate } from '../data/balance';
import { formatCurrency } from '../lib/utils';

export default function GoalsScreen({ navigation }) {
	return (
		<SafeAreaView className="flex-1 bg-background">
			<View className="px-5 pt-2">
				<Text className="text-white text-3xl font-bold">Total saving</Text>
				<Text className="text-secondaryText">$80,241.00</Text>
			</View>

			<View className="px-3 mt-3">
				<Card>
					<Text className="text-white font-semibold mb-2">Monthly Savings</Text>
					<VictoryChart theme={VictoryTheme.material} height={220} padding={{ top: 20, left: 45, right: 20, bottom: 45 }}>
						<VictoryBar data={monthlySavingsRate} style={{ data: { fill: '#C8B6FF', width: 18 } }} cornerRadius={6} />
					</VictoryChart>
				</Card>
			</View>

			<View className="px-5 mt-4 flex-1">
				<Text className="text-white text-xl font-bold mb-2">Goals</Text>
				<FlatList
					data={goals}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => navigation.navigate('GoalDetail', { id: item.id })}>
							<Card className={`mb-3 ${item.isHighlighted ? 'border border-[#284428] bg-[#1b2c1b]' : ''}`}>
								<Text className="text-white text-lg font-semibold">{item.title}</Text>
								<Text className="text-secondaryText mb-2">{item.category}</Text>
								<View className="flex-row justify-between">
									<Text className="text-white">{formatCurrency(item.currentAmount)}</Text>
									<Text className="text-secondaryText">{formatCurrency(item.totalAmount)}</Text>
								</View>
							</Card>
						</TouchableOpacity>
					)}
					contentContainerStyle={{ paddingBottom: 28 }}
				/>
			</View>
		</SafeAreaView>
	);
}