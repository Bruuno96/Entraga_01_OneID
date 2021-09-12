import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

export default function CadastroEstagio1({ onRegister }) {

const [primeiroNome, setPrimeiroNome] = useState('');
const [ultimoNome, setUltimoNome] = useState('');
const [celular, setCelular] = useState('');
const [email, setEmail] = useState('');
const [cpf, setCpf] = useState('');
const [password, setPassword] = useState('');

  const gravarDados = (primeiroNome, ultimoNome, celular, email, cpf, password) => {
    try{
      const user = {primeiroNome, ultimoNome, celular, email, cpf, password}
      AsyncStorage.setItem("ID:1", user)
      Alert.alert("Sucesso", "Dado salvo com sucesso")
      console.log(AsyncStorage.getItem)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: 300, marginBottom: 30, marginTop: 70}}>
        <Text style={{ color: 'white'}}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
      </View>

        <TextInput
          style={styles.input}
          placeholder="Digite seu Primeiro nome"
          onChangeText={setPrimeiroNome}
          value={primeiroNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu Último nome"
          onChangeText={setUltimoNome}
          value={ultimoNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu celular"
          onChangeText={setCelular}
          value={celular}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Informa seu CPF"
          onChangeText={setCpf}
          value={cpf}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />

       <TouchableOpacity style={{justifyContent:'center'}}onPress={() => onRegister(primeiroNome, ultimoNome, celular, email,cpf, password)}><Text style={styles.button}>Cadastrar</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',

  }, 
  input:{
    marginBottom: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3

  },
    button:{
    width:200,
    height:30,
    color:'white',
    backgroundColor:'purple',
    textAlign:'center',
    marginTop:10,
    borderRadius:10,
    }
});
