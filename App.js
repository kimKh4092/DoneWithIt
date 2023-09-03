import { NavigationContainer } from "@react-navigation/native";

import AuthStacks from "./navigation/authNavigation";
import MyTabs from "./navigation/appNavigation";
import myTheme from "./navigationTheme";

export default function App() {

  return (

    <NavigationContainer theme={myTheme}>
      <MyTabs />
      {/* <AuthStacks /> */}
    </NavigationContainer>

  )
}


