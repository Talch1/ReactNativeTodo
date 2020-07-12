import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Button,Alert} from 'react-native';
import { THEME } from '../theme';

export const AddTodo = ({onSubmit}) => {

    const [value,setValue] = useState('')

    const pressHendler = ()=>{
        if(value.trim()){
            onSubmit(value)
            setValue('')
        }else{
        Alert.alert('Todo Empty')
        }
 
    }
    return(
        <View style ={styles.block }>
<TextInput style= {styles.text}
onChangeText = {setValue}
value = {value}
placeholder = 'please enter todo'
autoCorrect = {false}
/>
<Button title = 'ADD' onPress={pressHendler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginBottom:15
    },
    text:{
      width:'80%',
      borderStyle:'solid',
      borderBottomWidth:2,
      borderBottomColor:THEME.MAIN_COLOR,
      padding:10
    }
   
})