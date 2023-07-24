
import React from "react";

import {  Text, View } from 'react-native';


const App=()=>{
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



export default App;