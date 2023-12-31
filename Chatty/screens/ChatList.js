import React, { useState } from "react"
import { Text } from "react-native";
import {  View } from "react-native";
import { Avatar, Button, Dialog, Divider, FAB, List, Portal, TextInput } from 'react-native-paper';

const ChatList = ()=>{

    const [isDialogVisible,setIsDialogVisible]=useState(false)



return(
    <View style={{flex:1}}>
        <List.Item
         title="User Name"
         description="Hi, I will be waiting for you"
         left={()=><Avatar.Text label="UN" size={57}/> }
        />
       <Divider leftInset/>

       <Portal>
        <Dialog visible={isDialogVisible} onDismiss={()=>setIsDialogVisible(false)}>
        <Dialog.Title>
            <Text>New Chat</Text>
        </Dialog.Title>
            <Dialog.Content>
             <TextInput label={"Enter User email"}/>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={()=>setIsDialogVisible(false)}>Cancel</Button>
              <Button >Save</Button>
            </Dialog.Actions>
        </Dialog>
       </Portal>

       <FAB icon="plus"style={{position:"absolute",bottom:16, right:16}}  onPress={()=>setIsDialogVisible(true)}/>
    </View>
)
}

export default ChatList;