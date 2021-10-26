import * as React from 'react';
import s from './styles';
import { Text, FlatList, Image } from 'react-native';

interface categoryProps {
  category: {
    id: string,
    title: string,
    movies: {
      id: string,
      poster: string,
    }[],
  };
}

const HomeCategory = ({ category }: categoryProps) => {
  return (
    <>
      <Text style={s.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal
        renderItem={({ item }) => (
          <Image
            style={s.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
      />
    </>
  );
};

export default HomeCategory;
