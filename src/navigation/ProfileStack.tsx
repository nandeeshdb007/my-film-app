import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileStackParamList } from '../types/navigation'
import COLORS from '../constants/colors'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator<ProfileStackParamList>()

const ProfileStack = () => {
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
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack
