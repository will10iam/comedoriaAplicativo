import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function App() {
  const [name, setName] = useState('William')

  function handleMudaNome() {
    setName('Maria Amalia')

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleMudaNome}>
        <Text style={styles.buttonText}>Mudar Nome</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060D13',
    paddingTop: 28,
  },
  title: {
    fontSize: 52,
    color: '#F6BE00',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#F6BE00',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },
  buttonText: {
    color: '#121212',
    fontWeight: 'bold'
  }
})