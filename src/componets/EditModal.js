import React from 'react'
import {View,Button,TextInput,Modal} from 'react-native'

export const EditModal = ({visible}) => {



    return(

        <Modal visible = {visible}>
            <View>
                <TextInput/>
                <Button title= 'cancel'/>
                <Button title= 'save'/>
            </View>
        </Modal>
    )
}