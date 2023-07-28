import React from "react"


import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Chat from "./screens/Chat"
import ChatList from "./screens/ChatList"
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp"
import Settings from "./screens/Settings"

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator =()=>(
<Tabs.Navigator>
  <Tabs.Screen name ="ChatList" component={ChatList}/>
  <Tabs.Screen name ="Settings" component={Settings}/>
</Tabs.Navigator>
)

const App =() =>{
  return(
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={TabsNavigator} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;