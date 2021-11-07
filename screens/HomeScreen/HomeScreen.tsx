import * as React from 'react';
import s from './styles';
import { View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import { FlatList, Pressable } from 'react-native';
import { HomeStackScreenProps } from '../../types';

const HomeScreen = ({
  navigation,
}: HomeStackScreenProps<'HomeScreen'>) => {
  const onMoviePress = () => {
    navigation.navigate('MovieDetailsScreen');
  };

  return (
    <View style={s.container}>
      {/*List of categories*/}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => (
          <Pressable onPress={onMoviePress}>
            <HomeCategory category={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default HomeScreen;
