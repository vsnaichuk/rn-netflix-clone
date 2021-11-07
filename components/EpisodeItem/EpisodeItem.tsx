import * as React from 'react';
import s from './styles';
import { Image, Pressable } from 'react-native';
import { Text, View } from '../Themed';
import { MaterialIcons } from '@expo/vector-icons';
import { Episode } from '../../types';

type Props = {
  episode: Episode;
  onPress: (episode: Episode) => void;
};

const EpisodeItem = ({ episode, onPress }: Props) => {
  return (
    <Pressable style={s.container} onPress={() => onPress(episode)}>
      <View style={s.row}>
        <Image style={s.image} source={{ uri: episode.poster }} />
        <View style={s.titleBox}>
          <Text style={s.title}>{episode.title}</Text>
          <Text style={s.duration}>{episode.duration}</Text>
        </View>
        <MaterialIcons name="file-download" size={24} color="white" />
      </View>

      <Text style={s.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

export default EpisodeItem;
