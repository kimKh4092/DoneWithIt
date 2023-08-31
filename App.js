import { NavigationContainer } from "@react-navigation/native";

import AuthStacks from "./navigation/authNavigation";
import MyTabs from "./navigation/appNavigation";
import myTheme from "./navigationTheme";

import ImageFormPicker from "./components/ImageFormPicker";
import ListingEditeScreen from "./screens/ListingEditeScreen";

export default function App() {

  return (

    <NavigationContainer theme={myTheme}>
      <MyTabs />
      {/* <AuthStacks /> */}
    </NavigationContainer>

    // <ImageFormPicker />
    // <ListingEditeScreen />
  )
}


