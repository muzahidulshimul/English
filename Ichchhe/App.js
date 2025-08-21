import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-background">
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}
