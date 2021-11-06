import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#636365',
    marginRight: 7,
  },
  box: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  match: {
    color: '#46bf19',
    fontWeight: 'bold',
    marginRight: 10,
  },
  ageBox: {
    backgroundColor: '#f6e016',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 10,
  },
  age: {
    color: '#000',
    fontWeight: 'bold',
  },
  hd: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8c9aac',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 22,
  },

  // Buttons
  playButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialBtn: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  socialText: {
    color: 'darkgrey',
    margin: 5,
  },
});

export default styles;
