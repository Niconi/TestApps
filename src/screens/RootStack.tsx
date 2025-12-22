import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../navigation/home/home';
import dashboard from '../navigation/dashboard/dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={home} options={{ headerShown: false }} />
      <Tab.Screen name="Dashboard" component={dashboard} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

