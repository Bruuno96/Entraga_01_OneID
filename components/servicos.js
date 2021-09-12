import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function CadastroEstagio1() {
  return (
    <View style={styles.container}>       

        <View style={{flex: 0.15, backgroundColor: 'rgba(0,0,0,0.5)', width:'100%', height: 100, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
            <View style={{alignContent:'center'}}>
                <Text style={{ fontWeight: 'bold',textAlign: 'center', fontSize: 20, margin:40, color:'white'}}>Quais dispositivos vai de encontro com sua necessidade ?</Text>
            </View>
        </View>

        <View style={{flex: 0.4, backgroundColor: 'rgba(0,0,0,0.5)', width:'100%', height: 100, justifyContent:'center', alignItems: 'center', }}>
            <View style={{backgroundColor:'white', width:300, height:240, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                <Text style={{fontSize:20, fontWeight:'bold', marginTop:20}}>AuthenticateID</Text>

                <Text style={{margin:20, fontSize:15}}>imply dummy text of 
                    the printing and typesetting industry. 
                    Lorem Ipsum has bolum Lorem Ipsum has bolum Lorem Ipsum has 
                    bolum Lorem Ipsum has bolum Lorem Ipsum has  Lorem Ipsum has.     
                </Text>

                <View>
                    <TouchableOpacity style={{backgroundColor:'purple', width:200, height:40, justifyContent:'center', alignItems:'center', marginBottom:20}}>
                        <Text style={{fontWeight:'bold', fontSize:15, border: 1}}>Adicionar AuthenticateID</Text>
                    </TouchableOpacity>
                </View>

            </View> 
            
            
        </View>

        <View style={{flex: 0.4, backgroundColor: 'rgba(0,0,0,0.5)', width:'100%', height: 100, justifyContent:'center', alignItems: 'center', }}>

              <View style={{backgroundColor:'white', width:300, height:240, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                <Text style={{fontSize:20, fontWeight:'bold', marginTop:30}}>EntranceID</Text>

                <Text style={{margin:20, fontSize:15}}>imply dummy text of 
                    the printing and typesetting industry. 
                    Lorem Ipsum has bolum Lorem Ipsum has bolum Lorem Ipsum has 
                    bolum Lorem Ipsum has bolum Lorem Ipsum has  Lorem Ipsum has.     
                </Text>

                <View>
                    <TouchableOpacity style={{backgroundColor:'purple', width:200, height:40, justifyContent:'center', alignItems:'center', marginBottom:20}}>
                        <Text style={{fontWeight:'bold', fontSize:17, border: 1}}>Adicionar EntreceID</Text>
                    </TouchableOpacity>
                </View>

            </View>
          
        </View>

        <View style={{flex: 0.1, backgroundColor: 'rgba(0,0,0,0.5)', width:'100%', height: 100, justifyContent:'center', alignItems:'center'}}>

        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
           <View style={{width:20, height:20, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:20, height:20, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:20, height:20, borderRadius: 50, backgroundColor: 'purple', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:20, height:20, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40}}></View>
        </View>
          
        </View>

  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)'
  }

});
