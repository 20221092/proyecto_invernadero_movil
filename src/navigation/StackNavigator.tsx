import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screen/Home';
import Perfil from '../screen/PantaPerfil';

import FAQ from '../screen/FAQ';
import Login from '../screen/Login';
import Contactospantalla from '../screen/Contactospantalla';
import Registro from '../screen/Registro';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="PantaPerfil" component={Perfil} />

        <Stack.Screen name="Contactospantalla" component={Contactospantalla} />
        <Stack.Screen name="Login" component={Login} />
     
        <Stack.Screen name="FAQ" component={FAQ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
