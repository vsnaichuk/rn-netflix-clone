import * as React from 'react';
import { useState } from 'react';
import s from './styles';
import { View } from '../../components/Themed';
import movie from '../../assets/data/movie';
import { FlatList } from 'react-native';
import EpisodeItem from '../../components/EpisodeItem/EpisodeItem';
import MovieHeader from './MovieHeader/MovieHeader';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const MovieDetailsScreen = ({}) => {
  const firstSeason = movie.seasons.items[0];
  const firstEpisode = firstSeason.episodes.items[0];
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(firstEpisode);

  return (
    <View style={s.container}>
      <VideoPlayer episode={currentEpisode} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem
            episode={item}
            onEpisodePress={setCurrentEpisode}
          />
        )}
        ListHeaderComponent={
          <MovieHeader
            season={currentSeason}
            onSeasonSelect={setCurrentSeason}
          />
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
