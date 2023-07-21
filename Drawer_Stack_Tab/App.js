import 'react-native-gesture-handler';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View } from 'react-native';

const Drawer =createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackOne=({navigation})=>{
  return(
    <View style={styles.container}>
      <Text>
        Page 1
      </Text>
      <Button title='Sayfa 2 ye git' onPress={()=>{
        navigation.navigate("Page2")
      }} />

    </View> 
  )

}
const StackTwo=()=>{
  return(
    <View style={[styles.container,styles.text]}>
      <Text>
        Page 2
      </Text>

    </View>
  )

}
const StackThree=()=>{
  return(
    <View style={styles.container}>
      <Text>
        Page 3
      </Text>

    </View>
  )

}
const StackFour=()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        Page 4
      </Text>

    </View>
  )

}

const MainNavigator =()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Page1" component={StackOne}/>
      <Stack.Screen name="Page2" component={StackTwo}/>
    </Stack.Navigator>
  )
}
const OtherNavigator =()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Page3" component={StackThree}/>
     
    </Stack.Navigator>
  )
}
const StackFourNavigator=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Page4" component={StackFour}/>
    </Stack.Navigator>
  )
}

const BottomNavigator=()=>{
return(
  <Tab.Navigator>
    <Tab.Screen name='TabHome' component={MainNavigator} />
    <Tab.Screen name='TabOther' component={OtherNavigator} />
  </Tab.Navigator>
)
}

const App=()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='DrawerHome' component={BottomNavigator}/>
        <Drawer.Screen name='DrawerOther' component={StackFourNavigator}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    backgroundColor:"pink",
   
  }
})

export default App;