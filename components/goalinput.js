import {
    View, TextInput, Button, StyleSheet, Modal
} from 'react-native';
import React, {useState} from 'react';


const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
   
    const goalInputHandler =(enteredGoal) =>{
      setEnteredGoal(enteredGoal);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal(''); // Clear input after adding
    };
  
    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Write your goal..."
        style={styles.input}
        // value={enteredGoal}
        onChangeText={goalInputHandler} />
        <View style={styles.buttonGroup}>
          <View style={styles.goalbutton}>   
          <Button title='Cancel' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.goalbutton}>
          <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
        </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        width: "100%",
      },
      input:{
        width: "85%",
        borderColor: "black",
        borderWidth: 1,
        padding: 12,
      },
      buttonGroup: {
        flexDirection: "row",
        gap: 10,
      },
      goalbutton: {
        width: "35%",
      }
})

export default GoalInput;
