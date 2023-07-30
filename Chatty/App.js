import React, { useEffect } from "react"


import {NavigationContainer, useNavigation} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from "@expo/vector-icons"

import Chat from "./screens/Chat"
import ChatList from "./screens/ChatList"
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp"
import Settings from "./screens/Settings"
import { Provider } from "react-native-paper"


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();


const TabsNavigator =()=>{
const navigation= useNavigation()
  useEffect(()=>{
    const isLoggeIn=false
    if(!isLoggeIn){
      navigation.navigate("SignUp")
    }
  },[])

return (
<Tabs.Navigator
screenOptions={({route})=>({
  tabBarIcon: ({ focused, color, size }) => {
    return<Ionicons name={route.name ==="ChatList" ? "chatbubbles-outline" : "settings-outline"} color={color} size={size}/>

  }

})}
>
  <Tabs.Screen name ="ChatList" component={ChatList}/>
  <Tabs.Screen name ="Settings" component={Settings}/>
</Tabs.Navigator>
)}

const App =() =>{
  return(
      <NavigationContainer
      >
        <Provider>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={TabsNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="SignUp" component={SignUp} options={{presentation:'fullScreenModal'}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{presentation:'fullScreenModal'}} />
          </Stack.Navigator>1
          </Provider>
      </NavigationContainer>
  )
}
export default App;