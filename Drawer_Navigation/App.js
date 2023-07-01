import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

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
    <TextInput style={{height:40, width:"100%", borderWidth:2}}/>
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

const App =()=>{
  return(
   <NavigationContainer>
    <Drawer.Navigator  initialRouteName='Home' defaultStatus="open">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="User" component={UserScreen} />
      <Drawer.Screen name="Other" component={OtherScreen} />
    </Drawer.Navigator>

   </NavigationContainer>
  )
}
export default App;