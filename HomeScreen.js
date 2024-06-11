import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, StatusBar } from 'react-native';
import { CircularProgress } from 'react-native-svg-circular-progress';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get('window');

const ShowDatePicker = ({ date, onChange }) => {
  const [show, setShow] = useState(false);

  const dateFormatter = (tm) => {
    const today = new Date();
    const oneDay = 86400000;
    const twoDay = 172800000;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const difference = today.getTime() - tm.getTime();

    if (difference < oneDay) {
      return "Today";
    } else if (difference < twoDay) {
      return "Yesterday";
    } else {
      return `${tm.getDate()} ${monthNames[tm.getMonth()]} ${tm.getFullYear()}`;
    }
  };

  return (
    <View style={styles.datePickerContainer}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Text style={styles.dateText}>{dateFormatter(date)}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShow(false);
            onChange(event, selectedDate);
          }}
        />
      )}
    </View>
  );
};

export default function HomeScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [calorieGoal, setCalorieGoal] = useState(2500);
  const [breakfastCalories, setBreakfastCalories] = useState(0);
  const [lunchCalories, setLunchCalories] = useState(0);
  const [dinnerCalories, setDinnerCalories] = useState(0);
  const [snackCalories, setSnackCalories] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const [carbsEaten, setCarbsEaten] = useState(0);
  const [proteinEaten, setProteinEaten] = useState(0);
  const [fatEaten, setFatEaten] = useState(0);
  const [showAddButton, setShowAddButton] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleAddCalories = (mealType) => {
    const calories = parseInt(inputValue);
    if (mealType === 'breakfast') {
      setBreakfastCalories(calories);
    } else if (mealType === 'lunch') {
      setLunchCalories(calories);
    } else if (mealType === 'dinner') {
      setDinnerCalories(calories);
    } else if (mealType === 'snack') {
      setSnackCalories(calories);
    }
    setShowAddButton(false);
  };

  const calculateTotalCaloriesEaten = () => {
    return breakfastCalories + lunchCalories + dinnerCalories + snackCalories;
  };

  const calculateCaloriesLeft = () => {
    return calorieGoal - calculateTotalCaloriesEaten();
  };

  const meals = [
    { type: 'Breakfast', recommended: 'Recommended 540Cal' },
    { type: 'Lunch', recommended: 'Recommended 640Cal' },
    { type: 'Dinner', recommended: 'Recommended 700Cal' },
    { type: 'Snack', recommended: 'Recommended 200Cal' },
  ];

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.ellipse} />
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={styles.headerText}>Carbs</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressBarInner, { width: `${(carbsEaten / calorieGoal) * 100}%` }]} />
            </View>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.headerText}>Protein</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressBarInner, { width: `${(proteinEaten / calorieGoal) * 100}%` }]} />
            </View>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.headerText}>Fat</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressBarInner, { width: `${(fatEaten / calorieGoal) * 100}%` }]} />
            </View>
          </View>
        </View>
        <View style={styles.macroContainer}>
          <Text style={styles.macroText}>{carbsEaten}/359g</Text>
          <Text style={styles.macroText}>{proteinEaten}/155g</Text>
          <Text style={styles.macroText}>{fatEaten}/359g</Text>
        </View>
        <View style={styles.progressOuterCircle}>   
          <CircularProgress
            size={140}
            width={10}
            fill={calculateTotalCaloriesEaten() / calorieGoal * 100}
            tintColor="#0F497E"
            backgroundColor="none"
            rotation={0}
          > 
            <View style={styles.goalContainer}>
              <Text style={styles.goalText}>{calculateCaloriesLeft()} kcal left</Text>
            </View>
          </CircularProgress>    
        </View>
        <ShowDatePicker date={date} onChange={handleDateChange} />

        {meals.map((meal, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.mealContainer, { marginTop: index === 0 ? 20 : 10 }]} // Adjust the margin for each meal
            onPress={() => navigation.navigate('AddFood', { mealType: meal.type })}
          >
            <Text style={styles.mealText}>{meal.type}</Text>
            <View style={styles.recommendedCaloriesContainer}>
              <Text style={styles.recommendedCaloriesText}>{meal.recommended}</Text>
              <Text style={styles.plusIcon}>+</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#EAE3E3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  ellipse: {
    position: 'absolute',
    width: width * 1.5,
        height: height * 0.6,
    left: -width * 0.25,
    top: -height * 0.2,
    backgroundColor: 'rgba(27, 120, 206, 0.85)',
    borderRadius: height * 0.3,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText:{
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  macroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  macroText: {
    fontSize: 18,
  },
  progressOuterCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
    position: 'relative',
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  goalText: {
    fontSize: 18,
  },
  mealContainer: {
    width: width * 0.9,
    height: 83.29,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 20,
  },
  mealText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recommendedCaloriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recommendedCaloriesText: {
    fontSize: 16,
    color: '#666',
  },
  plusIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F497E',
  },
  progressBar: {
    backgroundColor: '#ddd',
    height: 10,
    borderRadius: 5,
    marginTop: 5,
    width: '80%',
  },
  progressBarInner: {
    backgroundColor: '#0F497E',
    height: '100%',
    borderRadius: 5,
  },
});

StatusBar.setBackgroundColor('rgba(27, 120, 206, 0.85)');

