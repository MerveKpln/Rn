import React from "react"
import { Text, View } from "react-native";
import { Avatar, Divider, List } from 'react-native-paper';

const ChatList = ()=>{
return(
    <View>
        <List.Item
         title="User Name"
         description="Hi, I will be waiting for you"
         left={()=><Avatar.Text label="UN" size={57}/> }
        />
       
    </View>
)
}

export default ChatList;