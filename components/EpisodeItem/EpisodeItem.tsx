import * as React from 'react';
import s from './styles';
import { FlatList, Image } from 'react-native';
import { View, Text } from '../Themed';
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

interface EpisodeProps {
  episode: {
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot: string,
    video: string,
  };
}

const EpisodeItem = ({ episode }: EpisodeProps) => {
  return (
    <View style={s.container}>
      <View style={s.row}>
        <Image style={s.image} source={{ uri: episode.poster }} />
        <View style={s.titleBox}>
          <Text style={s.title}>{episode.title}</Text>
          <Text style={s.duration}>{episode.duration}</Text>
        </View>
        <MaterialIcons name="file-download" size={24} color="white" />
      </View>

      <Text style={s.plot}>{episode.plot}</Text>
    </View>
  );
};

export default EpisodeItem;
