import React, { useRef, useMemo } from 'react';
import { View, Text } from 'react-native';
import StyleSheet from './dashboardStyle';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';


function dashboard() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  return (
    <View style={StyleSheet.container}>
      <View style={{ flex: 1, padding: 20, backgroundColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>Dashboard</Text>
        <Text style={{ marginTop: 10, color: '#666' }}>Swipe up the bottom sheet!</Text>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose={false}
        backgroundStyle={{ backgroundColor: '#fff' }}
        handleIndicatorStyle={{ backgroundColor: '#999' }}
      >
        <BottomSheetView style={{ flex: 1, padding: 20 }}>
          <Text style={StyleSheet.headerText}>Welcome!</Text>
          <Text style={{ textAlign: 'center', marginTop: 10, color: '#666' }}>
            This is the bottom sheet content. Try swiping up or down!
          </Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

export default dashboard;