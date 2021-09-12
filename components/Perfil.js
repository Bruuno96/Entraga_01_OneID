import React , {useEffect, useState} from 'react';
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text } from 'react-native';
import PerfilButton from '../util/PerfilButton';
import { getUsers, setUsers, removerDado } from '../util/Storage';

export default function PerfilFisico({ user, onLogout, onDelete, onRegister }) {

const [primeiroNome, setPrimeiroNome] = useState('');
const [ultimoNome, setUltimoNome] = useState('');
const [celular, setCelular] = useState('');
const [email, setEmail] = useState('');
const [cpf, setCpf] = useState('');
const [password, setPassword] = useState('');

const [listUser, setListUser] = useState([]);

useEffect(() => {
    async function fetchData() {
      const list = await getUsers();
      if (list !== null && list.length > 0) {
        setListUser(list);
      }
    }
    fetchData();
  }, []);

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

       <View style={{flex:0.2, justifyContent:'center', alignItems:'center'}}>
       
       <TouchableOpacity onPress={onLogout}>
          <Text style={styles.button}>Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.button}>Deletar Usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => onRegister(primeiroNome, ultimoNome, celular, email,cpf, password)}><Text  style={styles.button}>Atualizar dados</Text>
        </TouchableOpacity>

       </View>
            
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
        marginTop:20,
        marginBottom: 50,
        borderRadius: 100
    },
    container: {
        flex: 1,
    },
    button:{
    width:200,
    height:20,
    color:'white',
    backgroundColor:'purple',
    textAlign:'center',
    marginTop:10
    }
});