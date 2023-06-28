
import React, { useEffect } from 'react';
import {View, Text,Button, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab =createBottomTabNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
      
    </View>
);}

  function UserScreen({ navigation }){
    console.log("Navigasyon", navigation);

    return (<View style={{
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    }}>
      <Text>User Screen  </Text>
    
    </View>
  )}

function OtherScreen({  navigation }){

  return (<View style={{
    flex:1, 
    justifyContent:'center',
    alignItems:"center"
  }}>
    <Text>Other Screen </Text>
    
  </View>
);}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row',height:60 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            navigation.navigate({ name: route.name, merge: true });
          
        };

        

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={index}
            onPress={onPress}
          
            style={{ flex: 1 , justifyContent:"center", alignItems:"center" ,backgroundColor:isFocused ? '#673ab7' : '#222'}}
          >
            <Text style={{ color: '#fff' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const App =()=>{
  return(
   <NavigationContainer>
    <Tab.Navigator  tabBar={props => <MyTabBar {...props}  /> }initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Other" component={OtherScreen} />
    </Tab.Navigator>

   </NavigationContainer>
  )
}
export default App;