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
        <Modal>
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Write your goal..."
        style={styles.input}
        // value={enteredGoal}
        onChangeText={goalInputHandler} />
        <Button 
        title="ADD YOUR GOAL"
        onPress={addGoalHandler} />
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
      },
      input:{
        width: "60%",
        borderColor: "black",
        borderWidth: 1,
        padding: 12,
        marginRight: 10,
      }
})

export default GoalInput;
