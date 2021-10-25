import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeParamList, RootTabParamList, RootTabScreenProps, TabTwoParamList } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import TabTwoScreen from '../screens/TabTwoScreen';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="ComingSoon"
        component={TabTwoNavigator}
        options={{
          title: "Coming Soon",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="video-library" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createNativeStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
