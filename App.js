import { View } from "react-native";
import AppCard from "./components/AppCard";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ListingDetails from "./screens/Listing";

import {
  MaterialCommunityIcons
} from '@expo/vector-icons'



export default function App() {

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
    <ViewImageScreen />

  )
}
