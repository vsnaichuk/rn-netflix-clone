import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import s from './styles';

import { RootStackScreenProps } from '../../types';

const NotFoundScreen = ({
  navigation,
}: RootStackScreenProps<'NotFound'>) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={s.link}
      >
        <Text style={s.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundScreen;
