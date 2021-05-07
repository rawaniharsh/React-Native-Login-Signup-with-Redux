import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import COLORS from '../constant/colors';

const InputForm =(props)=> {
  return (
    <View style={styles.container}>
         <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={COLORS.white}
        keyboardType="email-address"
        selectionColor="#fff"
      />
        <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={COLORS.white}
        selectionColor="#fff"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{color: COLORS.white, fontSize:16}}>{props.type}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  input: {
    width: 320,
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    color: COLORS.white,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 12
  },
  button: {
    alignItems: "center",
    backgroundColor: COLORS.dark,
    padding: 10,
    borderRadius: 20,
    marginVertical: 15
  }
});

export default InputForm;