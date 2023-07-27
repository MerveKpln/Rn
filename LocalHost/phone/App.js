import React, { useEffect } from "react";
import { View, StatusBar, Text } from "react-native"

import axios from "axios"

const App =()=>{
    useEffect(()=>{
        fecthMockData()
    }, [])
    const fecthMockData = async ()=>{
        const {data} = await axios.get("http://192.168.1.47:3000/api/users")
        console.log("response", data);
        
    }   
    return(
        <>
        <View>
            <StatusBar barStyle={"light-content"} backgroundColor={"#000"}/>
            <Text>Home</Text>
        </View>
        </>
    )
}

export default App