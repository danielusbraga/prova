import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Listausuario from './components/Listausuario';
import Usuario from './components/Usuario';
import Listapost from './components/Listapost';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista de Usuários">
        <Stack.Screen name="Lista de Usuários" component={Listausuario} />
        <Stack.Screen name="Usuário" component={Usuario} />
        <Stack.Screen name="Lista de Posts do Usuário" component={Listapost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
