import * as React from 'react';
import s from './styles';
import { FlatList, Image, Text } from 'react-native';

type Props = {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
};

const HomeCategory = ({ category }: Props) => {
  return (
    <>
      <Text style={s.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={s.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
