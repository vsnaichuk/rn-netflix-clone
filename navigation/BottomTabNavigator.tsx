import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ComingSoonStackParamList,
  HomeStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsScreen from '../screens/MovieDetailsScreen/MovieDetailsScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="ComingSoon"
        component={ComingSoonNavigator}
        options={{
          title: 'Coming Soon',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="video-library"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={ComingSoonNavigator} //TODO Implement SearchNavigator
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={ComingSoonNavigator} //TODO Implement DownloadsNavigator
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ title: '' }}
      />
    </HomeStack.Navigator>
  );
}

const ComingSoonStack =
  createNativeStackNavigator<ComingSoonStackParamList>();

function ComingSoonNavigator() {
  return (
    <ComingSoonStack.Navigator screenOptions={{ headerShown: false }}>
      <ComingSoonStack.Screen
        name="ComingSoonScreen"
        component={ComingSoonScreen}
      />
    </ComingSoonStack.Navigator>
  );
}
