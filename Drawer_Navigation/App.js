import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import {  createDrawerNavigator } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({state, descriptors, navigation}){
  return(
    <DrawerContentScrollView>
      <View style={{height:300, backgroundColor:"red",alignItems:'center', justifyContent:'center'}} >
<Text>Loogo </Text>
      </View>
      {
      state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name)
        }
return(
  <DrawerItem 
  key={index}
  activeTintColor='red' 
  inactiveTintColor='blue' 
  focused={isFocused} 
  activeBackgroundColor='white' 
  inactiveBackgroundColor='green'
  onPress={onPress}
  label={ ({ focused, color }) => <Text style={{ color }}>{focused ? 'Focused text' : label}</Text>}/>
)

      })}
    
    </DrawerContentScrollView>
  )
}

function Home({navigation}){
  const isDrawerOpen = useDrawerStatus() === 'open';
  return(
    <View>
      <TouchableOpacity onPress={()=>{
        navigation.toggleDrawer();
      }}>
        <Text>{isDrawerOpen ? "Open" : "Close"}</Text>
        <Text >
          toogle a menu
        </Text>
      </TouchableOpacity>
    </View>
  )
}
function Feed(){
  return(
    <Text style={{alignItems:'center',justifyContent:"center"}}>Hello Feed</Text>
  )
}
function Article(){
  return(
    <Text>Hello Article</Text>
  )
}
const App=()=> {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName='Home' screenOptions={{
        drawerStyle: {
          backgroundColor: 'pink',
          width: 240,
        },
        drawerPosition:'right',
        drawerType: 'slide',
        overlayColor:'#c6cbef'
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
 
    
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;