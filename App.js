import { View } from "react-native";


import ListingDetails from "./screens/ListingDetails";
import LoginScreen from './screens/LoginScreen'
import MessagesScreen from "./screens/MessagesScreen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import { useState } from "react";
import RegisterScreen from "./screens/RegisterScreen";
import ListingEditeScreen from "./screens/ListingEditeScreen";
import ImageInput from "./components/ImageInput";
import Screen from './components/Screen'
import ImageInputList from "./components/ImageInputList";
import * as ImagePicker from 'expo-image-picker'
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
  const [imageUris, setUri] = useState([]);

  const selectImage = async () => {
    const uris = [...imageUris];
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        uris.push(
          {
            uri: result.assets[0].uri,
          });
        console.log(uris)
        setUri(uris);
      }


    } catch (error) {
      console.log('error', error)
    }
  }

  return (

    // <GestureHandlerRootView>
    //   <ListingDetails />
    // </GestureHandlerRootView>




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


    <LoginScreen />
    // <RegisterScreen />

    // <ListingEditeScreen />

    // <Screen>
    //   <GestureHandlerRootView >
    //     <ImageInputList
    //       imageUris={imageUris}
    //       selectImage={selectImage} />
    //   </GestureHandlerRootView>
    // </Screen>



  )
}


