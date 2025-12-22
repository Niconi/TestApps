import {StyleSheet} from 'react-native';
import {color} from '../../ui-kit/styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  block: {
    backgroundColor: color.block,
    width: '100%',
    height: 445,
  },
  welcomeText: {
    fontSize: 13,
    color: color.dText,
    marginTop: 35,
    marginHorizontal: 30,
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.dText,
    marginHorizontal: 30,
  },
  image: {
    alignSelf: 'center',
    marginTop: 15,
    marginHorizontal: 30,
    width: 315,
    height: 170,
  },
  button1: {
    width: 145,
    height: 60,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 60,
    marginBottom: 39,
    justifyContent: 'center',
    backgroundColor: color.button,
  },
  button2: {
    width: 145,
    height: 60,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 160,
    marginBottom: 39,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: color.button,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.buttonText,
    textAlign: 'center',
  },
  btHeaderText: {
    fontSize: 18,
    fontWeight: 'semibold',
    alignSelf: 'center',
    color: color.dText,
    marginTop: 14.5,
    marginBottom: 31,
  },
  btSubText: {
    fontSize: 13,
    fontWeight: 'medium',
    color: color.dText,
    marginHorizontal: 71.71,
  },
  btAmount: {
    fontSize: 13,
    fontWeight: 'semibold',
    color: color.dText,
    alignSelf: 'flex-end',
    marginHorizontal: 29,
  },
  btText: {
    fontSize: 10,
    fontWeight: 'medium',
    color: color.dDetails,
    marginHorizontal: 71.71,
  },
  
});
