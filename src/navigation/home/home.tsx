import React, {useRef, useMemo} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import StyleSheet from './homeStyle';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {ProgressBar} from 'react-native-paper';
import CustomButton from '../../ui-kit/button/button';

function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%', '90%'], []);
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      {/* Header Profile */}
      <View style={StyleSheet.headerContainer}>
        <View>
          <Text style={StyleSheet.welcomeText}>Welcome</Text>
          <Text style={StyleSheet.name}>Jane Doe</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/images/picture.png')}
            style={StyleSheet.photo}
          />
        </View>
      </View>
      {/* Balance */}
      <ImageBackground
        source={require('../../assets/images/dashboard1.png')}
        style={StyleSheet.image}>
        <Text style={StyleSheet.balanceText}>My Savings</Text>
        <Text style={StyleSheet.balanceAmount}>Rp. 10.430.000</Text>
        <ProgressBar
          style={StyleSheet.balanceProgress}
          progress={0.25}
          color={'#102693'}
        />
        <Text style={StyleSheet.balanceLimit}>
          Rp. 10.430.000 / Rp. 40.000.000
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
          <Text style={StyleSheet.btHeaderText}>Transaction History</Text>
          <Text style={StyleSheet.btSubText}>No Transaction History</Text>
          <Text style={StyleSheet.btAmount}>Amount</Text>
          <Text style={StyleSheet.btText}>Details</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

export default Home;
