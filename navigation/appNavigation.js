import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    MaterialCommunityIcons
} from '@expo/vector-icons'

import MainScreen from '../screens/MainScreen';
import ListingEditeScreen from "../screens/ListingEditeScreen";
import AccountScreen from '../screens/AccountScreen'

import ListingDetails from "../screens/ListingDetails";
import MessagesScreen from "../screens/MessagesScreen";


const Stack = createStackNavigator();

const FeedStacks = () => (
    <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="Feed"
            component={MainScreen} />
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="ListingDetails"
            component={ListingDetails} />
    </Stack.Navigator>
)

const AccountStacks = () => (
    <Stack.Navigator initialRouteName="Account">
        <Stack.Screen
            name="Account" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const MyTabs = () =>
(
    <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: '#fff',
            tabBarActiveTintColor: '#fc5c65',

        }}>
        <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home"
                    size={size}
                    color={color} />
            }}
            name="Feed"
            component={FeedStacks} />
        <Tab.Screen
            name="Add"
            component={ListingEditeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="plus-circle"
                    size={35}
                    color={color} />

            }} />
        <Tab.Screen name="Account"
            component={AccountStacks}
            options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account"
                    size={size}
                    color={color} />
            }}
        />
    </Tab.Navigator>
);

export default MyTabs;