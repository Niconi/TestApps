import { StyleSheet } from 'react-native';
import { color } from '../../ui-kit/styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  imageContainer: {
    marginTop: 126.41,
    marginBottom: 43,
    width: 430.12,
    height: 322.59,
    alignSelf: 'center',
  },
  image: {
    width: 430.12,
    height: 322.59,
  },
  block: {
    backgroundColor: color.block,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: 315,
    height: 300,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.headerText,
    textAlign: 'center',
    marginTop: 33,
    marginBottom: 15,
  },
  text: {
    fontSize: 13,
    color: color.text,
    textAlign: 'center',
    marginBottom: 70,
    marginHorizontal: 27,
    lineHeight: 18,
  },
  button: {
    width: 153,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 81,
    marginBottom: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.button,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.buttonText,
    textAlign: 'center',
  },
});
