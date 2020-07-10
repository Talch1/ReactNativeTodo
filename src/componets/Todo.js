import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo,onRemove }) => {

    return (
        <TouchableOpacity activeOpacity={0.7} 
        onPress={()=>console.log('pressed'+ todo.id)}
        onLongPress = {() => onRemove(todo.id)}>
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    todo: {
        marginBottom: 15,
        flexDirection: 'row',
        padding: 15,
        alignContent: "center",
        borderColor: '#eee',
        borderWidth: 1
    }
})