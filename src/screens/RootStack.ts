import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../navigation/home/home';
import { createStaticNavigation } from '@react-navigation/native';
import dashboard from '../navigation/dashboard/dashboard';

const homeScreen = createNativeStackNavigator({
  screens: {
    Home: {
      screen: home,
      options: {
        headerShown: false,
      },
    },
    Dashboard: {
      screen: dashboard,
      options: {
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(homeScreen);
