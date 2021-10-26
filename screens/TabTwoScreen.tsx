import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabTwoScreen = () => {
  return <View style={s.container} />;
};

export default TabTwoScreen;
