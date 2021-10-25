import * as React from 'react';
import s from './styles';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Image } from 'react-native';

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'Home'>) {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg',
        }}
      />
    </View>
  );
}
