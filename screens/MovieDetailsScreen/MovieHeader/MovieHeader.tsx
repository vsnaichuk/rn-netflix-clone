import * as React from 'react';
import s from './styles';
import { Text, View } from '../../../components/Themed';
import movie from '../../../assets/data/movie';
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Season } from '../../../types';

type Props = {
  season: {
    name: string;
  };
  onSeasonSelect: (season: Season) => void;
};

const MovieHeader = ({ season, onSeasonSelect }: Props) => {
  const seasonNames = movie.seasons.items.map(({ name }) => name);

  return (
    <View style={{ padding: 12 }}>
      <Text style={s.title}>{movie.title}</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={s.match}>98% match</Text>
        <Text style={s.text}>{movie.year}</Text>
        <View style={s.ageBox}>
          <Text style={s.age}>12+</Text>
        </View>
        <Text style={s.text}>{movie.numberOfSeasons} Seasons</Text>
        <MaterialCommunityIcons
          name="high-definition"
          size={22}
          color="#8c9aac"
          style={s.hd}
        />
      </View>

      {/* Play Button */}
      <Pressable
        onPress={() => {
          console.warn('Play');
        }}
        style={s.playButton}
      >
        <Text style={s.playButtonText}>
          <Entypo name="controller-play" size={16} color="black" />
          Play
        </Text>
      </Pressable>

      {/* Download Button */}
      <Pressable
        onPress={() => {
          console.warn('Download');
        }}
        style={s.downloadButton}
      >
        <Text style={s.downloadButtonText}>
          <Feather name="download" size={16} color="white" /> Download
        </Text>
      </Pressable>

      <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
      <Text style={s.text}>Cast: {movie.cast}</Text>
      <Text style={s.text}>Creator: {movie.creator}</Text>

      <View style={s.box}>
        <Pressable style={s.socialBtn}>
          <AntDesign name="plus" size={24} color={'white'} />
          <Text style={s.socialText}>My List</Text>
        </Pressable>

        <Pressable style={s.socialBtn}>
          <Feather name="thumbs-up" size={24} color="white" />
          <Text style={s.socialText}>Rate</Text>
        </Pressable>

        <Pressable style={s.socialBtn}>
          <Feather name="send" size={24} color="white" />
          <Text style={s.socialText}>Share</Text>
        </Pressable>
      </View>

      <Picker
        selectedValue={season.name}
        onValueChange={(itemValue, itemIndex) => {
          onSeasonSelect(movie.seasons.items[itemIndex]);
        }}
        style={{ color: 'white', width: 130 }}
        dropdownIconColor={'white'}
      >
        {seasonNames.map((name) => (
          <Picker.Item label={name} value={name} key={name} />
        ))}
      </Picker>
    </View>
  );
};

export default MovieHeader;
