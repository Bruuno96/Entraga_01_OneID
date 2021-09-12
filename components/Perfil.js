import React from 'react';
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text } from 'react-native';
import PerfilButton from '../util/PerfilButton';

export default function PerfilFisico({ user, onLogout }) {

const [primeiroNome, setPrimeiroNome] = useState('');
const [ultimoNome, setUltimoNome] = useState('');
const [celular, setCelular] = useState('');
const [email, setEmail] = useState('');
const [cpf, setCpf] = useState('');
const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" imageStyle={{ borderRadius: 20}} style={styles.containerImage}>

                <Image
                  source={require("../assets/perfil.jpg")}
                    style={styles.fotoPerfil} />

            </ImageBackground>
            <View style={styles.info}>
                <PerfilButton chave="Primeiro Nome" value={user.primeiroNome} onChangeText={setPrimeiroNome}/>
                <PerfilButton chave="Sobrenome" value={user.ultimoNome} onChangeText={setUltimoNome}/>
                <PerfilButton chave="Data Nascimento" value={user.celular} onChangeText={setCelular}/>
                <PerfilButton chave="Email" value={user.email} onChangeText={setEmail}/>
                <PerfilButton chave="Senha" value={user.cpf} onChangeText={setCpf}/>
                <PerfilButton chave="CPF" value={user.password} onChangeText={setPassword}/>
            </View>

       <TouchableOpacity onPress={onLogout}>
          <Text style={styles.button}>Sair</Text>
        </TouchableOpacity>
            
        </View>
        
        
    );
    }

const styles = StyleSheet.create({
    containerImage: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#151515',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        flex: 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    info: {
        flex: 0.7,
    },
    fotoPerfil: {
        height: 100,
        width: 100,
        marginBottom: 50,
        borderRadius: 100
    },
    container: {
        flex: 1,
    },
    button:{
    width: 300,
    height: 45,
    backgroundColor: '#78308C',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:30,
    marginBottom:40
    }
});