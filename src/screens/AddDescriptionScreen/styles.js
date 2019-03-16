import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    flex: 0.8,
    marginVertical: 10,
    alignSelf: 'flex-start',
    padding: 0,
  },
});

export { styles };

