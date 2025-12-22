import React, {useRef, useMemo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import StyleSheet from './dashboardStyle';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';

function dashboard() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['56%'], []);
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.container}>
        <View>
        <Text style={StyleSheet.welcomeText}>Welcome</Text>
        <Text style={StyleSheet.name}>Jane Doe</Text>
        <Image
          source={require('../../assets/images/dashboard1.png')}
          style={StyleSheet.image}
        />
        </View>
        
        <TouchableOpacity
          style={StyleSheet.button2}
          onPress={() => navigation.navigate('Pay')}>
          <Text style={StyleSheet.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose={false}>
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

export default dashboard;
