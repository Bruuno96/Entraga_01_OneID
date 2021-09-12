import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-elements';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";



export default function CadastrarTag() {
	return (
		<View style={{flex:1, flexDirection:'column'}}>
        
        <View style={{flex:0.8}}>

            

            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>

              <Image
                source={require('../assets/rfid.png')}
                style={{width:150, height:150}}
              />
              <View style={{marginTop:20}}>
              
              <Text style={{width:250,textAlign:'center', marginTop:50, color:'black', fontWeight:'bold'}}>Insira o código que está no verso do dispositivo no campo abaixo.</Text>
              
              </View>
              
              
            </View>

        
        </View>
        
        <View style={{flex:0.3, justifyContent:'center', alignItems:'center'}}>

            <View style={{justifyContent:'center', alignItems:'center'}}>
                
                <TextInput
                style={styles.input}
                placeholder="Digite o PIN"
                />
            </View>

            <View style={{justifyContent:'center'}}>
                <TouchableOpacity style={{backgroundColor:'purple', width:100, height:30, alignItems:'center', justifyContent:'center', marginTop:10}}>
                    <Text style={{color:'white'}}>Cadastrar</Text>
                </TouchableOpacity>
             </View>
          
        
        </View>
        
        <View style={{flex:0.2, justifyContent:'center', alignItems:'center'}}>

             

             <View style={{width:200}}>
                <TouchableOpacity>
                    <Text style={{textAlign:'center', color:'purple', fontWeight:'bold'}}>Não tem um dispositivo ainda ?
Saiba aonde adquirir</Text>
                </TouchableOpacity>
             </View>

             
        
        </View>
		</View>
	);
}


const styles = StyleSheet.create({
	  input:{
    marginBottom: 10,
    padding: 10,
    width: 300,
    color:'black',
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    borderBottomWidth: 4,
    borderColor: "#20232a",
   }
});