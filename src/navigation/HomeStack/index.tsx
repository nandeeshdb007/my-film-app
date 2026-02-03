import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/navigation';
import COLORS from '../../constants/colors';
import HomeScreen from '../../screens/HomeScreen';


const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.secondary,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;