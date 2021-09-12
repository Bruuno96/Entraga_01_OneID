import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

const image = require('../assets/wallpaper_decisao.png');
export default function CadastroEstagio1() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <View style={{flex:0.5, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <TouchableOpacity
          
          >
          <Text style={{color:'white', fontSize: 30, width: 300, fontWeight: 'bold'}}>EU SOU PESSOA FISICA</Text>
          </TouchableOpacity>
      </View>

      <View style={{flex:0.5, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <TouchableOpacity
          
          >
          <Text style={{color:'white', fontSize: 30, width: 300, fontWeight: 'bold', marginTop: 100}}>EU SOU PESSOA JURIDICA</Text>
          </TouchableOpacity>
      </View>


    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'purple'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 80
  }
});
