import AsyncStorage from "@react-native-async-storage/async-storage"

const KEY = "USERS"

export const getUsers = async () => {
  try {
    const json = await AsyncStorage.getItem(KEY);
    return json != null ? JSON.parse(json) : null;
  } catch (e) {
    throw new Error("Erro ao obter os dados do usuário!");
  }
}

export const setUsers = async (users) => {
  try {
    const json = JSON.stringify(users);
    console.log(json)
    await AsyncStorage.setItem(KEY, json);
  } catch (e) {
    throw new Error("Erro ao gravar a lista de usuários.");
  }
}

export const removerDado = async (key) => {
  try{
    await AsyncStorage.removeItem(key);
  }catch(error){
    console.log(error)
  }
}