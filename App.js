import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import GoalItem from './GoalItem'
import GoalInput from './GoalInput';

const App = () => {
  const [list, setList] = useState([])
  const [isModelVisible, setIsModelVisible] = useState(false)

  const addGoalInputHandler = (goal) => {
    setList((currentGoals) => [...currentGoals, goal])
  }

  const deleteItem = (index) => {
    const newGoals = list.filter((el, i) => i !== index);
    setList(newGoals);
  }

  const startAddGoalModel = () => {
    setIsModelVisible(true);
  }

  const closeGoalGoalModel = () => {
    setIsModelVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalModel} />
       <GoalInput visible={isModelVisible}  onClose = {closeGoalGoalModel} addGoalInputHandler={addGoalInputHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <GoalItem key={index} text={item} deleteItem={() => deleteItem(index)} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor:'#1A0037'
  },

  goalsContainer: {
    flex: 4
  },
})

export default App
