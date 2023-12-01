import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const GoalItem = (props) => {
    return (
      
        <Pressable onPress={props.deleteItem}>
            <View>
                <Text style={styles.goalItem} >{props.text}</Text>
            </View>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        color:'white'
      }
    
})



export default GoalItem