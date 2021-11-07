import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type Episode = {
  id: string;
  title: string;
  poster: string;
  duration: string;
  plot: string;
  video: string;
};

export type Season = {
  id: string;
  name: string;
  episodes: { items: Episode[] };
};

//Global
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// RootStack
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, Screen>;

// RootTab
export type RootTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList> | undefined;
  ComingSoon: undefined;
  Search: undefined;
  Downloads: undefined;
};

export type RootTabScreenProps<
  Screen extends keyof RootTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

// HomeStack
export type HomeStackParamList = {
  HomeScreen: undefined;
  MovieDetailsScreen: undefined;
};
export type HomeStackScreenProps<
  Screen extends keyof HomeStackParamList,
> = NativeStackScreenProps<HomeStackParamList, Screen>;

// ComingSoonStack
export type ComingSoonStackParamList = {
  ComingSoonScreen: undefined;
};
