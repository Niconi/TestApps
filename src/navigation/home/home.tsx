import { TouchableOpacity, Text, View, Image } from 'react-native';
import StyleSheet from './homeStyle';
import home1 from '../../assets/images/home1.png';
import { useNavigation } from '@react-navigation/native';


function home() {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.imageContainer}>
        <Image source={home1} style={StyleSheet.image} />
      </View>
      <View style={StyleSheet.block}>
        <Text style={StyleSheet.headerText}>Welcome!</Text>
        <Text style={StyleSheet.text}>
          Welcome to EasySaving, the easy way to improve your finances and help
          you control expenses and income
        </Text>
        <TouchableOpacity style={StyleSheet.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={StyleSheet.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default home;