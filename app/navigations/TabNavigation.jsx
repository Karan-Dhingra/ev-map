import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoraiteScreen from '../screen/FavoraiteScreen/FavoraiteScreen';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ProfileScreen from '../screen/ProfileScreen/ProfileScreen';
import Colors from '../utils/Colors';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Search',
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarIcon: ({color, size}) => (<Ionicons name="search" color={color} size={size} />)
            }}/>
            <Tab.Screen name="Favoraite" component={FavoraiteScreen} options={{
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarIcon: ({color, size}) => (<Ionicons name="heart" color={color} size={size} />)
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarIcon: ({color, size}) => (<FontAwesome name="user-circle" color={color} size={size} />)
            }}/>
        </Tab.Navigator>
    );
}

export default TabNavigation