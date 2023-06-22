
import React, { useEffect } from 'react';
import {View, Text,Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();
function HomeScreen({ navigation }: {navigation: any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to User Page"
        onPress={() => navigation.navigate('User', {
          id: 1,
          name:"Asli catar",
        })}
      />
      <Button
        title="Go to Other Page"
        onPress={() => navigation.navigate('Other', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />
    </View>
);}

  function UserScreen({route, navigation }: {navigation: any, route: any}){
    console.log("Navigasyon", navigation);

    useEffect(()=>{
      navigation.setOptions({title: name +" in yeri"})
    },[])
    
    const {id,name}=route.params;
    return (<View style={{
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    }}>
      <Text>User Screen {name} {id}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )}

function OtherScreen({ route, navigation }: {navigation: any, route: any}){
  const {itemId,otherParam}=route.params;
  return (<View style={{
    flex:1, 
    justifyContent:'center',
    alignItems:"center"
  }}>
    <Text>Other Screen {itemId} {otherParam}</Text>
    <Button
        title="Go to Home Page... again"
        onPress={() =>
          navigation.push('Home', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
  </View>
)}


const App =()=>{
  return(
   <NavigationContainer>
    <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name="Home"  options={{ title: 'Home Page' }} component={HomeScreen} />
      <Stack.Screen name="User"  options={{ title: 'User Page' }} component={UserScreen} />
      <Stack.Screen name="Other" component={OtherScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;