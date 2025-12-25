import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import main from '../navigation/main/main';
import home from '../navigation/home/home';
import portofolio from '../navigation/portofolio/portofolio';
import support from '../navigation/support/support';
import profile from '../navigation/profile/profile';
import HomeIcon from '../assets/images/Home.svg';
import PortofolioIcon from '../assets/images/Portofolio.svg';
import SupportIcon from '../assets/images/Support.svg';
import ProfileIcon from '../assets/images/Profile.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#102693',
        tabBarInactiveTintColor: '#909090',
        tabBarStyle: {
          flexDirection: 'row',
          width: '100%',
          height: 80,
          paddingTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeIcon width={size} height={size} stroke={color} />
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
      <Tab.Screen
        name="Support"
        component={support}
        options={{
          tabBarIcon: ({color, size}) => (
            <SupportIcon width={size} height={size} stroke={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <ProfileIcon width={size} height={size} stroke={color} />
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
