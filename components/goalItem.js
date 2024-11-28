import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.listContainer}>
      <Pressable android_ripple={{color: 'olive'}} onPress={props.onDeleteGoal}>
        <Text style={styles.goalItem} key={props.item}>{props.item}</Text> 
      </Pressable>
    </View>
)};

const styles = StyleSheet.create({
    listContainer:{
        flex: 1,
        width: "100%",
      },
      goalItem: {
        padding: 8,
        margin: 8,
        backgroundColor: "dodgerblue",
        color: 'white',
        fontSize: 18,
        borderRadius: 8
      }
});

export default GoalItem;
