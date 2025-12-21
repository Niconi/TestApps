import React, { useRef, useMemo } from 'react';
import { View, Text } from 'react-native';
import StyleSheet from './dashboardStyle';
import BottomSheet from '@gorhom/bottom-sheet';


function dashboard() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%','50%','75%'], []);
  return (
    <View style={StyleSheet.container}>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={StyleSheet.block}>
          <Text style={StyleSheet.headerText}>Welcome!</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

export default dashboard;