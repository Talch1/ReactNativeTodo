import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { AddTodo } from '../componets/AddTodo'
import { Todo } from '../componets/Todo'
export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove = {()=>{removeTodo(item.id)}} onOpen={openTodo} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
