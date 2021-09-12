import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import CadastroEstagio1 from './components/CadastroEstagio1';
import Login1 from './components/login';
import Perfil from './components/Perfil';
import { getUsers, setUsers, removerDado } from './util/Storage';
// You can import from local files

export default function App() {

  const [isSigningUp, setIsSigningUp] = useState(false);
  const [user, setUser] = useState(null);
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

   const handleEnter = (username, password) => {
     console.log(listUser)
    // verifica se o email e senha sao válidos
    const usr = listUser.find(e => {
      return e.email === username
    })
    if (!usr) {
      Alert.alert("Erro", "Usuário não encontado.");
      return;
    }
    if (password !== usr.password) {
      Alert.alert("Erro", "Email e/ou Senha Inválidos.");
      return;
    }
    setUser(usr);
  }

  const handleRegister = (primeiroNome, ultimoNome, celular, email,cpf, password) => {
    // verifica se já existe um email igual na lista
    if (listUser.filter(e => e.email === email).length > 0) {
      Alert.alert("Erro", "Este email já está cadastrado!");
      return;
    }
    let users = [...listUser];
    const usr = {primeiroNome, ultimoNome, celular, email,cpf, password};
    users.push(usr);
    setUsers(users);
    setListUser(users);
    setUser(usr);
    setIsSigningUp(false);
  }

  const deleteUser = (email) => {

     if (listUser.filter(e => e.email === email).length > 0) {
       removerDado(email)
      return;
    }

  }

   if (user === null) {
    if (isSigningUp) {
      return (<CadastroEstagio1 onRegister={handleRegister} />);
    }
    else {
      return (
        <Login1 onEnter={handleEnter} onSignUp={setIsSigningUp} />);
    }
  }
  else {
    return <Perfil user={user} onLogout={() => setUser(null)} />
  } 
  
  if(listUser != null) {
    return <Listagem onListAll={listUser}>
  }
}
//   return (
//     <NavigationContainer>
//     <Stack.Navigator initialRouteName="Login" 
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <Stack.Screen name="CadastroEstagio1" component={CadastroEstagio1} />
//       <Stack.Screen name="Login" component={Login1} />
//       <Stack.Screen name="Perfil" component={Perfil} />
//     </Stack.Navigator>
//     </NavigationContainer>
