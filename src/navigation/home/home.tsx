import React, {useRef, useMemo} from 'react';
import {View, Text, Image, ImageBackground, FlatList} from 'react-native';
import StyleSheet from './homeStyle';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {ProgressBar} from 'react-native-paper';
import CustomButton from '../../ui-kit/button/button';
import DATA from '../../data/data';
import profile from '../../data/profile';

function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%', '90%'], []);
  const navigation = useNavigation();
  const user = profile[0];
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('id-ID');
  };

  return (
    <View style={StyleSheet.container}>
      {/* Header Profile */}
      <View style={StyleSheet.headerContainer}>
        <View>
          <Text style={StyleSheet.welcomeText}>Welcome</Text>
          <Text style={StyleSheet.name}>{user.name}</Text>
        </View>
        <Image source={user.photo} style={StyleSheet.photo} />
      </View>
      {/* Balance */}
      <ImageBackground
        source={require('../../assets/images/dashboard1.png')}
        style={StyleSheet.image}>
        <Text style={StyleSheet.balanceText}>My Savings</Text>
        <Text style={StyleSheet.balanceAmount}>
          Rp. {formatCurrency(user.balance)}
        </Text>
        <ProgressBar
          style={StyleSheet.balanceProgress}
          progress={user.balance / user.limit}
          color={'#102693'}
        />
        <Text style={StyleSheet.balanceLimit}>
          Rp. {formatCurrency(user.balance)} / Rp. {formatCurrency(user.limit)}
        </Text>
      </ImageBackground>
      {/* Buttons */}
      <View style={StyleSheet.buttonContainer}>
        <CustomButton
          title="Save Money"
          onPress={() => navigation.navigate('Save')}
          icon={require('../../assets/images/Save.png')}
        />
        <CustomButton
          title="Pay"
          onPress={() => navigation.navigate('Pay')}
          icon={require('../../assets/images/Pay.png')}
        />
      </View>
      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose={false}
        handleIndicatorStyle={StyleSheet.handleIndicator}>
        <BottomSheetView style={StyleSheet.block}>
          <Text style={StyleSheet.btHeaderText}>Transactions History</Text>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <View style={StyleSheet.btContainer}>
                <View style={StyleSheet.logoContainer}>
                  <Image
                    source={
                      item.type === 'Income'
                        ? require('../../assets/images/In.png')
                        : require('../../assets/images/Out.png')
                    }
                    style={StyleSheet.logo}
                  />
                </View>
                <View style={StyleSheet.btTextContainer}>
                  <Text style={StyleSheet.btSubText}>{item.title}</Text>
                  <Text style={StyleSheet.btText}>{item.date}</Text>
                </View>
                <View style={StyleSheet.btAmountContainer}>
                  <Text style={StyleSheet.btAmount}>
                    {item.type === 'Income' ? '+' : '-'} {item.amount}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

export default Home;
