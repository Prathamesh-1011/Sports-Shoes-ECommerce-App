import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from './components/HomePage.js';
import Exchange from './components/Exchange.js';
import Articles from './components/Articles.js';
import Account from './components/Account.js';
import WishlistScreen from './components/WishList.js';
import NotificationScreen from './components/Notification.js';
import Voucher from './components/Voucher.js';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconColor = focused ? 'orange' : 'gray';
          let iconSize = size || 24;

          if (route.name === 'Home') {
            return <AntDesign name="home" size={iconSize} color={iconColor} />;
          } else if (route.name === 'Exchange') {
            return <FontAwesome name="exchange" size={iconSize} color={iconColor} />;
          } else if (route.name === 'Voucher') {
            return <Fontisto name="ticket" size={iconSize} color={iconColor} />;
          } else if (route.name === 'Articles') {
            return <MaterialIcons name="article" size={iconSize} color={iconColor} />;
          } else if (route.name === 'Account') {
            return <MaterialCommunityIcons name="account" size={iconSize} color={iconColor} />;
          }
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Exchange" component={Exchange} />
      <Tab.Screen name="Voucher" component={Voucher} />
      <Tab.Screen name="Articles" component={Articles} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

// Stack navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
