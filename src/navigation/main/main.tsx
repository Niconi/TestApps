import { TouchableOpacity, Text, View, Image } from 'react-native';
import StyleSheet from './mainStyle';
import main1 from '../../assets/images/main1.png';
import { useNavigation } from '@react-navigation/native';


function main() {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.imageContainer}>
        <Image source={main1} style={StyleSheet.image} />
      </View>
      <View style={StyleSheet.block}>
        <Text style={StyleSheet.headerText}>Welcome!</Text>
        <Text style={StyleSheet.text}>
          Welcome to EasySaving, the easy way to improve your finances and help
          you control expenses and income
        </Text>
        <TouchableOpacity style={StyleSheet.button} onPress={() => navigation.navigate('HomeStack')}>
          <Text style={StyleSheet.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default main;