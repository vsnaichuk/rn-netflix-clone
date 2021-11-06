import * as React from 'react';
import s from './styles';
import { Text, View } from '../../components/Themed';
import movie from '../../assets/data/movie';
import { FlatList, Image } from 'react-native';
import EpisodeItem from '../../components/EpisodeItem/EpisodeItem';
import MovieHeader from './MovieHeader/MovieHeader';
import { useState } from 'react';

const MovieDetailsScreen = ({}) => {
  const firstSeason = movie.seasons.items[0];
  const firstEpisode = firstSeason.episodes.items[0];
  const [currentSeason, setCurrentSeason] = useState(firstSeason);

  const seasonChangeHandler = (itemValue: any, itemIndex: number) => {
    setCurrentSeason(movie.seasons.items[itemIndex]);
  };

  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{
          uri: firstEpisode.poster,
        }}
      />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        ListHeaderComponent={
          <MovieHeader
            season={currentSeason}
            onSeasonChange={seasonChangeHandler}
          />
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
