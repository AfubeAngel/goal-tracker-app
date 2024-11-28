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

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const closeGoalHandler = () => {
    setModalVisible(false);
  }

  const addGoalHandler =(enteredGoal: any) =>{
    setVitalGoals((currentGoals) => 
      [...currentGoals, enteredGoal]);
    setModalVisible(false);
  }

  const deleteGoalHandler = (index: number) => {
    setVitalGoals((currentGoals) => {
      return currentGoals.filter((_, i) => i !== index);
    });
  };

  return (
    <View style={styles.container}>
      {/* button to open modal */}
      <Button title="Add New Goal" color="dodgerblue" 
      onPress={handleModalOpen} />
      <GoalInput visible={modalVisible} 
      onAddGoal={addGoalHandler}
      onCancel={closeGoalHandler} />

      {/* Goals List */}
      <View style={styles.listContainer}>
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
    paddingHorizontal: 15,
    backgroundColor: 'navy'
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
