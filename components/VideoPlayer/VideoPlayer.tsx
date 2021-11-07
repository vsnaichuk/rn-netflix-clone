import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import s from './styles';
import { Episode } from '../../types';
import { View } from '../Themed';
import { Video } from 'expo-av';

type Props = {
  episode: Episode;
};

const VideoPlayer = ({ episode }: Props) => {
  const video = useRef<Video>(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync(
        { uri: episode.video },
        {},
        false,
      );
    })();
  }, [episode]);

  return (
    <View style={s.container}>
      <Video
        ref={video}
        style={s.video}
        source={{
          uri: episode.video,
        }}
        usePoster
        posterSource={{ uri: episode.poster }}
        posterStyle={s.poster}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
