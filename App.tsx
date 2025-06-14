import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ComponentesScreen from './screens/ComponentesScreen';
import ContadorScreen from './screens/ContadorScreen';
import BateriaScreen from './screens/BateriaScreen';
import FormStateScreen from './screens/FormStateScreen';
import FormEffectScreen from './screens/FormEffectScreen';
import PersonajesEffect from './screens/PersonajesScreen';
import PersonajesScreen from './screens/PersonajesScreen';
import CamaraScreen from './screens/CamaraScreen';
import ContactosScreen from './screens/ContactosScreen';

export default function App(){
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Componentes" component={ComponentesScreen}  />
        <Stack.Screen name="Contador" component={ContadorScreen} />
        <Stack.Screen name="Porcentaje de bateria" component={BateriaScreen} />
        <Stack.Screen name="Formulario state" component={FormStateScreen} />
        <Stack.Screen name="Formulario effect" component={FormEffectScreen} />
        <Stack.Screen name="Personajes" component={PersonajesScreen} />
        <Stack.Screen name="Camara" component={CamaraScreen} />
        <Stack.Screen name="Contactos" component={ContactosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
