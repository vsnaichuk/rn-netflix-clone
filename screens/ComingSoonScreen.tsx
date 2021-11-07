import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ComingSoonScreen = () => {
  return (
    <View style={s.container}>
      <Text>Coming Soon</Text>
    </View>
  );
};

export default ComingSoonScreen;
