import React, { useState } from 'react'
import { View, Button, TextInput, Modal, StyleSheet, Alert } from 'react-native'
import { THEME } from '../theme'


export const EditModal = ({ visible, value, onCancel ,onSave}) => {

const [tit, setTit] = useState(value)


const onHandleSave = () =>{
 
    if(tit.length <3){
        Alert.alert(`To Short todo ${tit.length} symbols`)
    }else{
        {onSave(tit)}
    }
}
    return (

        <Modal visible={visible} animationType= 'slide' transparent={false}>
            <View style={styles.wraper}>
                <TextInput defaultValue={value} style={styles.textIn} 
                maxLength = {64}
                onChangeText = { setTit}/>
                <View style = {styles.buttons}>
                <Button title='cancel' onPress={onCancel} color= {THEME.DANGER_COLOR}/>
                <Button title='save ' onPress = {onHandleSave} />
                </View>
             
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wraper: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        
    },
    textIn: {
        padding:10,
        borderBottomColor:THEME.MAIN_COLOR,
        borderBottomWidth:2,
        width:'80%'
    },
    buttons:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:'space-around',
        width:'100%'
    }
})