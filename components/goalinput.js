import {
    View, TextInput, Button, StyleSheet, Modal, Image
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
          <Image 
          style={styles.image}
          source={{
            uri:"https://cdn.pixabay.com/photo/2017/01/05/16/58/goal-setting-1955806_1280.png"}} 
            onError={(error) => console.log("Image loading error:", error.nativeEvent)}/>
        <TextInput 
        placeholder="Write your goal..."
        style={styles.input}
        // value={enteredGoal}
        onChangeText={goalInputHandler} />
        <View style={styles.buttonGroup}>
          <View style={styles.goalbutton}>   
          <Button title='Cancel' color='#f31282' onPress={props.onCancel} />
          </View>
          <View style={styles.goalbutton}>
          <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
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
      image: {
        width: 150,
        height: 100,
      },
      input:{
        width: "85%",
        borderColor: "#e4d0ff",
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        color: '#120428',
        borderWidth: 1,
        padding: 16,
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
