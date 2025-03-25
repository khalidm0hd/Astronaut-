import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen'; // Adjusted import path
import Favorites from './Screen/Favorites'; // Adjusted import path
import Chats from './Screen/Chats'; // Adjusted import path
import Me from './Screen/Me'; // Adjusted import path

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }} 
      />
            <Tab.Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size} color={color} />
          ),
        }} 
      />
       <Tab.Screen 
        name="astronut" 
        component={Chats} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-astronaut" size={size} color={color} />
          ),
        }} 
      />
<Tab.Screen 
        name="Me" 
        component={Me} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default Main;