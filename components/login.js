import React, { useEffect, useState }from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

export default function Login1({ onEnter, onSignUp, onListAll}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <Image
        source= {require('../assets/logo.png')}
        style={styles.logo}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          onChangeText={setUsername}
          value={username}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.bottom}
          onPress={() => onEnter(username, password)}>
          
          <Text style={styles.botaoText}>Login</Text></TouchableOpacity>

        <TouchableOpacity onPress={() => onSignUp(true)}
          style={{marginTop: 25}}>
          <Text style={styles.botaoText}>Cadastre-se</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => onListAll(true)}
          style={{marginTop: 25}}>
          <Text style={styles.botaoText}>Consultar Usuarios</Text></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,1)',
  }, 
  logo:{
    width: 300,
    height: 50,
    marginBottom: 100
  },
  input:{
    marginTop: 20,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3

  },
  bottom: {
    width: 300,
    height: 45,
    backgroundColor: '#78308C',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    
  }
});
