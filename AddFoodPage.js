import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  

const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export default function AddFoodPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for food..."
            placeholderTextColor="#000"
          />
          <Ionicons name="scan" size={24} color="black" style={styles.scanIcon} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('MyFood')} style={styles.myFoodButton}>
          <Text style={[styles.myFoodText, { textAlign: 'right' }]}>My food</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  header: {
    width: 742,
    height: 126,
    backgroundColor: 'rgba(27, 120, 206, 0.85)',
    borderRadiusLeft:500,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBar: {
    width: width * 0.9, 
    height: 44,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20, 
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    color: '#000',
  },
  scanIcon: {
    marginLeft: 10,
  },
  myFoodButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  myFoodText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  line: {
    width: width * 0.9, 
    height: 0,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
});


StatusBar.setBackgroundColor('rgba(27, 120, 206, 0.85)');
