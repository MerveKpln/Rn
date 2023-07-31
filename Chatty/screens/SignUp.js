import React, { useState } from "react"
import {  View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import firebase from "firebase/app"

const SignUp = ()=>{
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");


    const createAccount= async ()=>{
        
    }

    return(
    <View style={{margin:16}}>

        <TextInput label={"Name"}  value={name} onChangeText={(text)=>setName(text)}/>
        <TextInput label={"Email"} style={{marginTop:12}} value={email} onChangeText={(text)=>setEmail(text)}/>
        <TextInput label={"Password"}  style={{marginTop:12}} value={password} onChangeText={(text)=>setPassword(text)}/>
        <View style={{flexDirection:"row" , justifyContent:"space-between", marginTop:10}}>
        <Button  mode="contained-tonal">Sign In</Button>
        <Button mode="contained-tonal">Sign Up</Button>
        </View>
    </View>
        
)
}

export default SignUp;