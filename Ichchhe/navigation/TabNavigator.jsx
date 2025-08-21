import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlmariScreen from '../screens/AlmariScreen';
import GoalsScreen from '../screens/GoalsScreen';
import { WalletMinimal, Target, Plus, List } from 'lucide-react-native';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function Placeholder() {
	return <View className="flex-1 bg-background" />;
}

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#1E1E1E', borderTopColor: '#1E1E1E' },
				tabBarActiveTintColor: '#C8B6FF',
				tabBarInactiveTintColor: '#A0A0A0',
			}}
		>
			<Tab.Screen
				name="Almari"
				component={AlmariScreen}
				options={{
					tabBarIcon: ({ color, size }) => <WalletMinimal color={color} size={size} />,
					tabBarLabel: 'Almari',
				}}
			/>
			<Tab.Screen
				name="Goals"
				component={GoalsScreen}
				options={{
					tabBarIcon: ({ color, size }) => <Target color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="Add"
				component={Placeholder}
				options={{
					tabBarIcon: ({ color, size }) => <Plus color={color} size={size} />,
							tabBarLabel: 'Add',
				}}
			/>
			<Tab.Screen
				name="List"
				component={Placeholder}
				options={{
					tabBarIcon: ({ color, size }) => <List color={color} size={size} />,
				}}
			/>
		</Tab.Navigator>
	);
}