import {StyleSheet} from 'react-native';
import {color} from '../../ui-kit/styles/color';

export default StyleSheet.create({
  mainPortofolioContainer: {
    flex: 1,
    backgroundColor: color.background,
    flexDirection: 'column',
  },
  totalImage:{
    width: '100%',
    height: 220,
  },
  totalContainer:{
    alignItems: 'center',
  },
  portofolioContainer:{
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 315,
    height: 130,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  totalHeader:{
    fontSize: 18,
    fontWeight: 'bold',
    color: color.bText,
    marginTop: 25,
  },
  totalText:{
    fontSize: 13,
    fontWeight: 'regular',
    color: color.bText,
    marginTop: 30,
  },
  totalAmountText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: color.bText,
    marginTop: 12,
  },
  portofolioNameText:{
    fontSize: 14,
    fontWeight: 'bold',
    color: color.portofolioText,
    marginTop: 19.5,
  },
  portofolioAmountText:{
    fontSize: 11,
    fontWeight: 'medium',
    color: color.portofolioText,
    marginTop: 8.75,
  },
  portofolioDateText:{
    fontSize: 10,
    fontWeight: 'medium',
    color: '#CBCBCB',
    marginTop: 17.75,
    alignSelf: 'flex-end',
    marginRight: 20.75,
  },
  imagePortofolio:{
    width: 55,
    height: 55,
    marginHorizontal: 15,
  },
  balanceProgress: {
    borderRadius: 10,
    width: 209.25,
    marginTop: 12.5,

  },
  addPortofolioButton:{
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 315,
    height: 50,
    borderRadius: 15,
    marginTop: 20,
  },
  addPortofolioText:{
    fontSize: 13,
    fontWeight: 'semibold',
    color: color.hText,
  }

});