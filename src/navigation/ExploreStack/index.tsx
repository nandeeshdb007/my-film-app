import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ExploreStackParamList } from '../../types/navigation'
import COLORS from '../../constants/colors'
import ExploreScreen from '../../screens/SearchScreen'
import MovieDetailsScreen from '../../screens/MovieDetailsScreen'

const Stack = createNativeStackNavigator<ExploreStackParamList>()

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.secondary,
        headerTitle: '',
      }}
    >
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="MovieDetail"
        component={MovieDetailsScreen}
        options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default ExploreStack
