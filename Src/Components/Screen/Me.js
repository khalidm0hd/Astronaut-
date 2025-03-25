import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Text } from 'react-native';
import PhoneInput from 'react-native-international-phone-number';
import Checkbox from 'expo-checkbox';

const Me = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [nba, setYbNba] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country); 
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.journey}>Host a Supercharger</Text>
        <View style={styles.use}>
          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
        </View>
        <View style={styles.think}>
          <Text style={styles.aura}>Telephone Number</Text>
          <PhoneInput
            value={inputValue}
            onChangePhoneNumber={handleInputValue}
            selectedCountry={selectedCountry}
            onChangeSelectedCountry={handleSelectedCountry}
            style={styles.phoneInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={inputEmail}
            onChangeText={setInputEmail}
            keyboardType='email-address'
            style={styles.input}
          />
        </View>
        <View style={styles.result}>
          <Checkbox
            value={nba}
            onValueChange={setYbNba}
            style={styles.checkbox}
          />
          <Text style={styles.act}>Learn about Energy Products</Text>
          <Text style={styles.days}>
            By selecting “Submit” I agree to the terms and{"\n"} conditions and allow Tesla to contact me.
          </Text>
        </View>
        <TouchableOpacity style={styles.show}>
          <Text style={styles.expo}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.michel}>
        <Text style={styles.dawg}>Copyright © 2025 khalidmohd</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Center content vertically
    padding: 15,
  },
  journey: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#00FFFF',
    textTransform: 'capitalize',
    marginVertical: 18,
  },
  use: {},
  input: {
    backgroundColor: '#2e4053',
    height: 40,
    margin: 11,
    padding: 10,
    borderWidth: 0.5,
    color: '#FFFF',
  },
  label: {
    marginTop: 11,
    fontSize: 18,
    color: '#FFFF',
    padding: 1,
    textTransform: 'capitalize',
  },
  think: {
    width: '96%',
    marginLeft: 10,
  },
  aura: {
    marginTop: 11,
    fontSize: 18,
    color: '#FFFF',
    paddingBottom: 4,
    textTransform: 'capitalize',
  },
  phoneInput: {
    width: '100%',
    borderColor: 'gray',
  },
  result: {
    marginTop: 10,
    marginLeft: 15,
  },
  checkbox: {
    color: 'red',
    top: 22,
  },
  act: {
    color: 'white',
    marginLeft: 31,
    fontSize: 17,
    fontWeight: '600',
  },
  days: {
    color: 'red',
    marginTop: 22,
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  show: {
    alignSelf: 'center',
    marginTop: 44,
    backgroundColor: 'blue',
    height: 57,
    justifyContent: 'center',
    width: '80%',
    borderRadius: 8,
  },
  expo: {
    color: 'white',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    margin: 4,
  },
  michel: {
    marginTop: 25,
    alignItems: 'center',
    padding: 10,
  },
  dawg: {
    fontWeight: '500',
    color: '#00FFFF',
  },
});

export default Me;