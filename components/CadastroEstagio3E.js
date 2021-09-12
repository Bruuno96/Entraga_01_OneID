import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

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
        <Text style={{ color: 'white'}}>Preencha os dados do endereço de sua empresa.</Text>
      </View>
   

        <TextInput
          style={styles.input}
          placeholder="CEP: "
        />

        <View style={{flex:1, flexDirection:'row', marginLeft: 30, marginRight: 30, marginTop: 10}}>
            <TextInput
              style={{flex: 0.7, backgroundColor: '#fff', fontSize: 16, borderRadius: 3, padding: 5, fontWeight: 'bold', marginRight: 10, marginBottom: 15}}
              placeholder="Rua: "
            />

            <TextInput
              style={{flex: 0.3, backgroundColor: '#fff', fontSize: 16, borderRadius: 5, padding: 10, marginRight: 0, marginBottom: 15, fontWeight:   'bold'}}
              placeholder="Nº: "
            />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Bairro: "
          secureTextEntry={true}
        />

        <View style={{flex:1, flexDirection:'row', marginLeft: 30, marginRight: 30, marginTop: 10}}>
            <TextInput
              style={{flex: 0.7, backgroundColor: '#fff', fontSize: 16, borderRadius: 3, padding: 10, fontWeight: 'bold', marginRight: 10, marginBottom: 15}}
              placeholder="Cidade: "
            />

            <TextInput
              style={{flex: 0.3, backgroundColor: '#fff', fontSize: 16, borderRadius: 5, padding: 10, marginRight: 0, marginBottom: 15, fontWeight:   'bold'}}
              placeholder="UF "
            />
        </View>



        <View style={{justifyContent:'center'}}>
        <TouchableOpacity
      style={{width:100, height: 40, backgroundColor:'purple', marginTop: 40, marginLeft: 160, justifyContent: 'center', alignContent: 'center', alignItems:'center', borderRadius:10}}>
      
      <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Continuar</Text>
      </TouchableOpacity>
      </View>

        <View style={{flex: 1, flexDirection: 'row', marginTop: 60}}>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'purple', marginBottom: 40, marginRight: 15}}></View>
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
    marginBottom: 5,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,

  }

});
