import React from 'react';
import {TouchableOpacity, Text, Image, ImageSourcePropType} from 'react-native';
import StyleSheet from '../../navigation/home/homeStyle';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  onPress: () => void;
  icon: ImageSourcePropType;
}

const CustomButton = ({title, onPress, icon}: Props) => {
  return (
    <TouchableOpacity style={StyleSheet.button} onPress={onPress}>
      <Image source={icon} style={StyleSheet.bIcon} />
      <Text style={StyleSheet.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
