import React from 'react'
import {View,StyleSheet,FlatList} from 'react-native'
import AddTodo from '../componets/AddTodo'
import Todo from '../componets/Todo'
export const MainScreen = props => {
    return(

        <View>
   <AddTodo onSubmit={addTodo} />
      
      <FlatList
      
        data={todos}
        renderItem={({ item }) => <Todo
         onRemove = {removeTodo} 
         todo={item}></Todo>}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    
})