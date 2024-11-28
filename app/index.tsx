import { 
  Text, 
  View, 
  StyleSheet, 
  FlatList, 
  Button} from "react-native";
import React, {useState} from 'react';
import GoalItem from '../components/goalItem';
import GoalInput from '../components/goalinput';

export default function Index() {
  const [vitalGoals, setVitalGoals] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler =(enteredGoal: any) =>{
    setVitalGoals((currentGoals) => [...currentGoals, enteredGoal]);
  }

  const deleteGoalHandler = (index: number) => {
    setVitalGoals((currentGoals) => {
      return currentGoals.filter((_, i) => i !== index);
    });
  };

  return (
    <View style={styles.container}>
      {/* button to open modal */}
      <Button title="Add New Goal" color="olive" />

        {/* GoalInput-Modal Component */}
      <GoalInput 
      onAddGoal={addGoalHandler}/>

      {/* Goals List */}
      <View style={styles.listContainer}>
        <Text style={styles.headerText}>List of goals</Text>
        <FlatList
        data={vitalGoals}
        renderItem={({item}) =>
        <GoalItem 
        item={item}
        onDeleteGoal={() => 
          deleteGoalHandler(vitalGoals.indexOf(item))}
        /> }
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
  listContainer:{
    flex: 1,
    width: "100%",
    paddingTop: 10
  },
  headerText:{
    fontSize: 18,
    fontWeight: "bold",
  },
})
