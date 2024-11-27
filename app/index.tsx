import { 
  Text, 
  View, 
  StyleSheet, 
  Button, 
  TextInput, 
  ScrollView, 
  FlatList } from "react-native";
import React, {useState} from 'react';

export default function Index() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [vitalGoals, setVitalGoals] = useState<string[]>([]);

  const goalInputHandler =(enteredGoal: any) =>{
    setEnteredGoal(enteredGoal);
  }

  const addGoalHandler =() =>{
    setVitalGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal('');
  }

  // if(goals.length > 0){
  //   return ("provide goal");
  // }

  return (
    <View style={styles.container}
    >
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
      {/* using scrollview */}
      {/* <ScrollView style={styles.listContainer}>
      <Text style={styles.headerText}>List of goals</Text>
      {vitalGoals.map((goal, index) => (
        <Text style={styles.goalItem} key={index}>{goal}</Text>
      ))}
      </ScrollView> */}

      {/* using flatlist which is more efficient for this */}
      <View style={styles.listContainer}>
        <Text style={styles.headerText}>List of goals</Text>
        <FlatList
        data={vitalGoals}
        renderItem={({item}) =>
        <Text style={styles.goalItem} key={item}>{item}</Text> }
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 15
  },
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
  },
  listContainer:{
    flex: 1,
    width: "100%",
    paddingTop: 10
  },
  headerText:{
    fontSize: 18,
    fontWeight: "bold",
  },
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "dodgerblue",
    color: 'white',
    fontSize: 18,
    borderRadius: 8
  }
})
