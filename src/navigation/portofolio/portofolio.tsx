import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import StyleSheet from './portofolioStyle';
import {ImageBackground} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import portofolio from '../../data/portofolio';
import CustomButton from '../../ui-kit/button/button';

function Portofolio() {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('id-ID');
  };
  const portofolioData = portofolio[0];
  return (
    <View style={StyleSheet.mainPortofolioContainer}>
      <ImageBackground
        source={require('../../assets/images/portofolio1.png')}
        style={StyleSheet.totalImage}>
        <View style={StyleSheet.totalContainer}>
          <Text style={StyleSheet.totalHeader}>My Portofolio</Text>
          <Text style={StyleSheet.totalText}>Saving Value</Text>
          <Text style={StyleSheet.totalAmountText}>
            Rp.{formatCurrency(12480000)}
          </Text>
        </View>
      </ImageBackground>
      <FlatList
        data={portofolio}
        renderItem={({item}) => (
          <View style={StyleSheet.portofolioContainer}>
            <Image
              source={require('../../assets/images/pension.png')}
              style={StyleSheet.imagePortofolio}
            />
            <View>
              <Text style={StyleSheet.portofolioNameText}>{item.name}</Text>
              <ProgressBar
                style={StyleSheet.balanceProgress}
                progress={item.amount / item.goal}
                color={'#102693'}
              />
              <Text style={StyleSheet.portofolioAmountText}>
                Rp.{formatCurrency(item.amount)} / Rp.
                {formatCurrency(item.goal)}
              </Text>
              <Text style={StyleSheet.portofolioDateText}>
                Last saving {item.date}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => (
          <TouchableOpacity style={StyleSheet.addPortofolioButton}>
            <Text style={StyleSheet.addPortofolioText}>+ add portofolio</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Portofolio;
