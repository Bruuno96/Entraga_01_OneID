import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import CadastroEstagio1 from './components/CadastroEstagio1';
import Login1 from './components/login';
import Perfil from './components/Perfil';
import { getUsers, setUsers, removerDado } from './util/Storage';

import Listagem from './components/Listagem';

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

  const handleRegister1 = (primeiroNome, ultimoNome, celular, email,cpf, password) => {
    let users = [...listUser];
    const usr = {primeiroNome, ultimoNome, celular, email,cpf, password};
    users.push(usr);
    setUsers(users);
    setListUser(users);
    setUser(usr);
    setIsSigningUp(false);
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
  }else if (user != null) {
    return <Perfil user={user} onLogout={() => setUser(null)} onRegister={handleRegister1}/>
  }
// if (user == null){
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="ConsultaUsuarios" component={Listagem} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// }
}
