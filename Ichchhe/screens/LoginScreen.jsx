import React from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import Button from '../components/Button';

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	return (
		<SafeAreaView className="flex-1 bg-background">
			<View className="flex-1 px-6 justify-center gap-6">
				<Text className="text-white text-3xl font-bold">Ichchhe</Text>
				<View className="gap-4">
					<View className="bg-card rounded-xl p-3">
						<TextInput
							placeholder="Email"
							placeholderTextColor="#777"
							keyboardType="email-address"
							className="text-white"
							value={email}
							onChangeText={setEmail}
						/>
					</View>
					<View className="bg-card rounded-xl p-3">
						<TextInput
							placeholder="Password"
							placeholderTextColor="#777"
							secureTextEntry
							className="text-white"
							value={password}
							onChangeText={setPassword}
						/>
					</View>
				</View>
				<Button title="Continue" onPress={() => navigation.replace('Tabs')} className="mt-2" />
			</View>
		</SafeAreaView>
	);
}