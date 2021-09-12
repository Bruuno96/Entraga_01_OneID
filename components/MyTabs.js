import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../components/HomeScreen';
import CadastrarTag from '../components/CadastrarTag'
import { PerfilFisico } from './Perfil';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Meu dispositivo':
              iconName = 'devices';
              break;
            case 'Configurações':
              iconName = 'settings';
              break;
            case 'CadastrarTag':
              iconName = 'step';
              break;
            case 'Notifications':
              iconName = '';
              break;
            case 'Settings':
              iconName = 'help-circle';
              break;
            case 'Home':
              iconName = 'home';
              break;
            case 'Perfil':
              iconName = 'profile';
              break;
            default:
              iconName = 'add';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />
            ;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#9C27B0',
        inactiveTintColor: '#777',

      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dispositivos" component={HomeScreen} />
      <Tab.Screen name="Tag" component={CadastrarTag} />
      <Tab.Screen name="Atividade" component={CadastrarTag} />
      <Tab.Screen name="Perfil" component={PerfilFisico} />
    </Tab.Navigator>
  );
}