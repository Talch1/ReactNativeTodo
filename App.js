import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Navbar } from './src/componets/Navbar'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = title => {

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }
  const removeTodo = id =>{
    setTodos(prev => prev.filter(todo =>todo.id !==id))
  }

  return (
    <View>
      <Navbar title='Todo App!' />
      <View style={styles.container}>
     
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
})
