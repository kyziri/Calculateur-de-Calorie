import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MyFoodPage = ({ navigation }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [grams, setGrams] = useState('');

  const handleAddFood = () => {
    // Ici, vous pouvez ajouter la logique pour envoyer les données de l'aliment à votre base de données Firebase
    // Une fois que l'aliment est ajouté avec succès, vous pouvez naviguer vers une autre page
      const foodData = {
      name: foodName,
      calories: parseFloat(calories),
      carbs: parseFloat(carbs),
      protein: parseFloat(protein),
      fat: parseFloat(fat),
      grams: parseFloat(grams),
    };
    updateMacros(foodData);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Food Name:</Text>
      <TextInput
        style={styles.input}
        value={foodName}
        onChangeText={setFoodName}
        placeholder="Enter food name"
      />
      <Text style={styles.label}>Calories:</Text>
      <TextInput
        style={styles.input}
        value={calories}
        onChangeText={setCalories}
        placeholder="Enter calories"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Carbs:</Text>
      <TextInput
        style={styles.input}
        value={carbs}
        onChangeText={setCarbs}
        placeholder="Enter carbs"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Protein:</Text>
      <TextInput
        style={styles.input}
        value={protein}
        onChangeText={setProtein}
        placeholder="Enter protein"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Fat:</Text>
      <TextInput
        style={styles.input}
        value={fat}
        onChangeText={setFat}
        placeholder="Enter fat"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Grams:</Text>
      <TextInput
        style={styles.input}
        value={grams}
        onChangeText={setGrams}
        placeholder="Enter grams"
        keyboardType="numeric"
      />
      <Button title="Add Food" onPress={handleAddFood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default MyFoodPage;
