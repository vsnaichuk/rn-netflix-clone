import * as React from 'react';
import s from './styles';
import { View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import { FlatList } from 'react-native';

export default function HomeScreen({}: RootTabScreenProps<'Home'>) {
  return (
    <View style={s.container}>
      {/*List of categories*/}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
}
