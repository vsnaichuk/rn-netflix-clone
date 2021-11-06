import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  image: {
    aspectRatio: 16 / 9,
    height: 75,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  titleBox: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {},
  duration: {
    color: '#443f3f',
    fontSize: 12,
  },
  plot: {
    marginTop: 5,
  },
});

export default styles;
