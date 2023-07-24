import 'react-native-gesture-handler';
import React from "react";

import {  Text, View ,Button,StatusBar } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home=({navigation})=>{
  return(
          <View style={{backgroundColor:"aqua",alignItems:"center" ,flexDirection:'cloumn' ,justifyContent:"center"}}>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <Text>
        Home
      </Text>
      <Button title="Go User Page" onPress={()=>{
      navigation.navigate("user")
      }}/>
      <Button title="Go FlexBox Page" onPress={()=>{
      navigation.navigate("flexbox")
      }}/>
          </View>
  )
}
const User=()=>{
  return(
        <View style={{backgroundColor:"aqua",alignItems:"center" ,flexDirection:'row'}}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <Text>
        User
      </Text>
          </View>
        )
}
const FlexBox=()=>{
  return(
    <>
      <View style={{ flex:1, flexDirection:"row" }}>
        <View style={{backgroundColor:"blue", flex:2, height:100,alignItems:"center" ,flexDirection:'row'}}>
      <Text>Kutu 1</Text>
      <Text>Kutu 1.2</Text>
      
        </View>
        <View style={{backgroundColor:"purple", flex:1 , height:100,alignItems:"center"}}>
          <Text >Kutu 2</Text>
        </View>
        <View style={{backgroundColor:"green", flex:1 , height:100, justifyContent:"center"}}>
        <Text>Kutu 3</Text>
        </View>
        <View style={{backgroundColor:"pink", flex:1 , height:100, justifyContent:"center",alignItems:"center"}}>
        <Text>Kutu 4</Text>
        </View>
  
</View>
 {/* <View style={{backgroundColor:"blue", flex:2}}>
  <Text>Hollo 2</Text>
</View> */}
    </>
  )
}

const App=()=>{
  return(
  
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} options={{
        headerStyle:{
          height:80,
        backgroundColor:"#000"   }
        ,
        headerTintColor:"#fff"
      }}/>
      <Stack.Screen name='user' component={User}/>
      <Stack.Screen name='flexbox' component={FlexBox}/>
      
    </Stack.Navigator>
   </NavigationContainer>


    
    
  )
}



export default App;