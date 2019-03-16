import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pickedImage: {
    width: undefined,
    height: 300,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: (screenWidth - 3) / 4,
    height: (screenWidth - 3) / 4,
    marginRight: 1,
    marginTop: 1,
  },
  picked: {
    opacity: 0.3,
  },
});

export { styles };
