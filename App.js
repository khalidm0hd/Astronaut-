import { StatusBar } from 'expo-status-bar';
import Main from './Src/Components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export default function App() {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer> 
    <Main />
    <StatusBar style="auto" />
      </NavigationContainer>
  );
}
