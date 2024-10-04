import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from './components/HomePage.js';  // Home component
import Exchange from './components/Exchange.js';  // Exchange component
import Tickets from './components/Tickets.js';  // Tickets component
import Articles from './components/Articles.js';  // Articles component
import Account from './components/Account.js';  // Account component

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// HomeTabNavigator: A bottom tab navigator that includes multiple tabs like Home, Exchange, etc.
function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <AntDesign name="home" size={24} color="black" />;
          } else if (route.name === 'Exchange') {
            return <FontAwesome name="exchange" size={24} color="black" />;
          } else if (route.name === 'Tickets') {
            return <Fontisto name="ticket" size={24} color="black" />;
          } else if (route.name === 'Articles') {
            return <MaterialIcons name="article" size={24} color="black" />;
          } else if (route.name === 'Account') {
            return <MaterialCommunityIcons name="account" size={24} color="black" />;
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Exchange" component={Exchange} />
      <Tab.Screen name="Tickets" component={Tickets} />
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
        {/* HomeTabNavigator is wrapped within the stack navigator */}
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabNavigator}
          options={{ headerShown: false }}  // Hides the header to avoid double headers
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
