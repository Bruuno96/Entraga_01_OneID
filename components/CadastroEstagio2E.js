import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

export default function CadastroEstagio1() {
  return (
    <View style={styles.container}>

      <View style={{justifyContent:'center'}}>
        <TouchableOpacity
      style={{width:100, height: 40, borderRadius:10 ,backgroundColor:'purple', justifyContent: 'center', alignItems: 'center',marginRight: 150, marginTop: 60}}>
      
      <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Voltar</Text>
      </TouchableOpacity>
      </View>
      
      
      <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: 300, marginBottom: 30, marginTop: 70}}>
        <Text style={{ color: 'white'}}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
      </View>
   

        <TextInput
          style={styles.input}
          placeholder="Nome fantasia: "
        />

        <TextInput
          style={styles.input}
          placeholder="CNPJ: "
        />

        <TextInput
          style={styles.input}
          placeholder="Razão social: "
          secureTextEntry={true}
        />

        <View style={{justifyContent:'center'}}>
        <TouchableOpacity
      style={{width:100, height: 40, backgroundColor:'purple', marginTop: 40, marginLeft: 160, justifyContent: 'center', alignContent: 'center', alignItems:'center', borderRadius:10}}>
      
      <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Continuar</Text>
      </TouchableOpacity>
      </View>

        <View style={{flex: 1, flexDirection: 'row', marginTop: 100}}>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'purple', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
          <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40}}></View>
        </View>

        

  
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

  }

});
