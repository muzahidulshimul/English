import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';
import GoalDetailScreen from '../screens/GoalDetailScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#121212' } }}>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Tabs" component={TabNavigator} />
			<Stack.Screen name="GoalDetail" component={GoalDetailScreen} />
		</Stack.Navigator>
	);
}