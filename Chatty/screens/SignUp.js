import React from "react"
import {  View } from "react-native";
import { TextInput } from "react-native-paper";

const SignUp = ()=>{
return(
    <View>

        <TextInput label={"Name"}/>
        <TextInput label={"Email"} style={{marginTop:12}}/>
        <TextInput label={"Password"}/>
        
    </View>
)
}

export default SignUp;