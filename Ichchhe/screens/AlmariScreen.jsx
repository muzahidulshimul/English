import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryArea } from 'victory-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { balanceHistory } from '../data/balance';
import { goals } from '../data/goals';
import { formatCurrency } from '../lib/utils';

export default function AlmariScreen({ navigation }) {
	const total = 35981;

	return (
		<SafeAreaView className="flex-1 bg-background">
			<Animated.View entering={FadeInDown.delay(60)} className="px-5 pt-2">
				<Text className="text-secondaryText uppercase tracking-wider">Total balance • All time</Text>
				<Text className="text-white text-5xl font-extrabold mt-1">{formatCurrency(total)}</Text>
			</Animated.View>

			<Animated.View entering={FadeInDown.delay(120)} className="px-3 mt-2">
				<Card className="p-4">
					<VictoryChart theme={VictoryTheme.material} height={210} padding={{ top: 10, left: 45, right: 20, bottom: 35 }}>
						<VictoryArea
							style={{ data: { fill: 'rgba(200,182,255,0.25)', stroke: '#C8B6FF', strokeWidth: 2 } }}
							interpolation="monotoneX"
							data={balanceHistory}
						/>
					</VictoryChart>
				</Card>
			</Animated.View>

			<View className="px-5 mt-4">
				<View className="flex-row gap-3">
					<Card className="flex-1">
						<Text className="text-secondaryText">Cash</Text>
						<Text className="text-white text-xl font-bold mt-1">$11,250.00</Text>
						<Text className="text-green-400 mt-1">+0.8%</Text>
					</Card>
					<Card className="flex-1">
						<Text className="text-secondaryText">Investments</Text>
						<Text className="text-white text-xl font-bold mt-1">$21,231.00</Text>
						<Text className="text-green-400 mt-1">+12%</Text>
					</Card>
				</View>
			</View>

			<View className="px-5 mt-6 mb-4">
				<Card className="bg-[#1b2c1b] border border-[#284428]">
					<View className="flex-row items-center justify-between">
						<View>
							<Text className="text-white font-semibold">CashPilot AI forecast</Text>
							<Text className="text-secondaryText mt-1">How soon can you buy a house?</Text>
						</View>
						<Button title="Find out" variant="secondary" onPress={() => navigation.navigate('Goals')} />
					</View>
				</Card>
			</View>

			<View className="px-5 flex-1">
				<View className="flex-row justify-between items-center mb-2">
					<Text className="text-white text-xl font-bold">Goals</Text>
					<Button title={`View (${goals.length})`} variant="ghost" onPress={() => navigation.navigate('Goals')} />
				</View>
				<FlatList
					data={goals}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Card className={`mb-3 ${item.isHighlighted ? 'border border-[#284428] bg-[#1b2c1b]' : ''}`}>
							<View className="flex-row justify-between items-center">
								<View className="flex-1 pr-3">
									<Text className="text-white text-lg font-semibold">{item.title}</Text>
									<Text className="text-secondaryText mt-1">{item.category}</Text>
								</View>
								<Button title="Open" variant="secondary" onPress={() => navigation.navigate('GoalDetail', { id: item.id })} />
							</View>
						</Card>
					)}
					contentContainerStyle={{ paddingBottom: 20 }}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</SafeAreaView>
	);
}