import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddFoodPage from './AddFoodPage';
import MyFoodPage from './MyFoodPage';  // Importez la page MyFood

const Stack = createStackNavigator();

export default function App() {
  // Modifier la couleur de la barre de statut
  StatusBar.setBackgroundColor('#1B78CE'); 

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#1B78CE', // Couleur de la barre de navigation
        },
        headerTintColor: '#FFFFFF', // Couleur du texte de la barre de navigation
      }}>
        {/* Ajouter les écrans */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddFood" component={AddFoodPage} />
        <Stack.Screen name="MyFood" component={MyFoodPage} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}