import {createNativeStackNavigator} from '@react-navigation/native-stack';
import main from '../navigation/main/main';
import home from '../navigation/home/home';
import portofolio from '../navigation/portofolio/portofolio';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/images/Home.svg';
import PortofolioIcon from '../assets/images/Portofolio.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#102693',
        tabBarInactiveTintColor: '#909090',
      }}>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Portofolio"
        component={portofolio}
        options={{
          tabBarIcon: ({color, size}) => (
            <PortofolioIcon width={size} height={size} stroke={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
