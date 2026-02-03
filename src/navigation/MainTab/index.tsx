import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../../types/navigation';
import COLORS from '../../constants/colors';
import HomeStack from '../HomeStack';
import ExploreStack from '../ExploreStack';
import ProfileStack from '../ProfileStack';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: route.name.slice(0, -3),
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopColor: COLORS.secondary,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.text,

        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'HomeTab') {
            return (
              <AntDesign
                name={focused ? 'home' : 'home'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'ExploreTab') {
            return (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'ProfileTab') {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="ExploreTab" component={ExploreStack} options={{ title: 'Explore' }} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default MainTab;
