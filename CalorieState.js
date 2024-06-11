import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';

const CalorieStats = ({ carbsValue, proteinValue, fatValue }) => {
  // Calculate total calories from carbs, protein, and fat
  const totalCalories = (carbsValue * 4) + (proteinValue * 4) + (fatValue * 9);

  return (
    <View style={styles.container}>
      {/* Render CircularProgress and other UI components */}
      <CircularProgress 
        size={100} 
        width={10} 
        fill={(totalCalories / 2000) * 100} // Assuming 2000 calories as target
        tintColor="#00e0ff" 
        backgroundColor="#3d5875" 
        rotation={0} 
        lineCap="round"
      />
      {/* Display other information like carbs, protein, fat values */}
      <Text>Carbs: {carbsValue}</Text>
      <Text>Protein: {proteinValue}</Text>
      <Text>Fat: {fatValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalorieState;
