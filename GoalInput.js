import { View, TextInput, Button, StyleSheet, Modal,Image } from 'react-native';
import React, { useState } from 'react'

const GoalInput = (props) => {

  const [goal, setGoal] = useState('')

  function goalInputHandler(text) {
    setGoal(text)
  }

  function addGoalHandler() {
    props.addGoalInputHandler(goal)
    props.onClose()
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>

         <Image style={styles.image}  source={require('./assets/images/k.png')}/>
        <TextInput placeholder='Type your goal' onChangeText={goalInputHandler} style={styles.textInput} />
        <View style={styles.btnContainer}>

        <View style={styles.button}>
       <Button title='cancel'  color={'#F31282'} onPress={props.onClose} />
       </View>

        <View style={styles.button}>
        <Button title='Add Goal' color={'#5E0ACC'} onPress={addGoalHandler} />
        </View>
      
        
        </View>
      </View>
    </Modal>


  )
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBlockColor: '#cccccc',
    flex: 1,
    padding:18,
    backgroundColor:'#1A0037',
  
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    color:'black',
    borderRadius:6,
    backgroundColor:'#e4d0ff',
    padding: 8
  },
  btnContainer:{
    flexDirection:'row',
    marginTop:16
  },
  button:{
    width:100,
    marginHorizontal:8
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
})

export default GoalInput