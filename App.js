import { View } from "react-native";
import AppCard from "./components/AppCard";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ListingDetails from "./screens/Listing";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen'

import {
  MaterialCommunityIcons
} from '@expo/vector-icons'
import MessagesScreen from "./screens/MessagesScreen";
import MyAccountScreen from "./screens/AccountScreen";
import MainScreen from "./screens/MainScreen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import { useState } from "react";
import RegisterScreen from "./screens/RegisterScreen";
import ListingEditeScreen from "./screens/ListingEditeScreen";


// const categories = [
//   {
//     label: 'Furniture',
//     value: 1
//   },
//   {
//     label: 'Clothing',
//     value: 2
//   },
//   {
//     label: 'Camera',
//     value: 3
//   }
// ]

export default function App() {

  const [category, setCategory] = useState();

  return (
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }}>
    //   <AppCard
    //     title='Red jacket for sale!'
    //     subTitle='$100'
    //     image={require('./assets/jacket.jpg')} />
    // </View>

    // <ListingDetails />
    // <ViewImageScreen />
    // <GestureHandlerRootView>
    //   <MessagesScreen />
    // </GestureHandlerRootView>

    // my account screen
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   flex: 1,
    //   paddingTop: 20
    // }}>
    //   <GestureHandlerRootView >
    //     <MyAccountScreen />
    //   </GestureHandlerRootView>
    // </View>

    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   flex: 1,
    //   paddingTop: 20
    // }
    // }>
    //   <MainScreen />
    // </View>


    // inputs
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   flex: 1,
    //   paddingTop: 20
    // }
    // }>
    //   <AppTextInput
    //     icon='email'
    //     placeholder='username' />

    // <AppPicker
    //   selectedItem={category}
    //   onSelectItem={item => setCategory(item)}
    //   items={categories}
    //   icon='apps'
    //   placeholder='category' />
    // </View>

    // forms
    // <LoginScreen />
    // <RegisterScreen />
    <ListingEditeScreen />


  )
}
