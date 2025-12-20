
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const Root = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Gorhom Bottom Sheet Example</Text>
        <Button title="Open Sheet (25%)" onPress={() => handleSnapPress(0)} />
        <Button title="Open Sheet (50%)" onPress={() => handleSnapPress(1)} />
        <Button title="Open Sheet (90%)" onPress={() => handleSnapPress(2)} />
        <Button title="Close Sheet" onPress={handleClosePress} />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['25%', '50%', '90%']}
        enablePanDownToClose={true}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.sheetText}>Awesome Bottom Sheet! 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  sheetText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Root;
