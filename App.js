import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Agenda from './src/screens/Agenda';
import Annuaire from './src/screens/Annuaire';
import Boutique from './src/screens/Boutique';
import DealsFidelity from './src/screens/DealsFidelity';
import DetailsArtAg from './src/screens/DetailsArtAg';
import DetailsBoutique from './src/screens/DetailsBoutique';
import DetailsDealsFidelite from './src/screens/DetailsDealsFidelite';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Agenda" component={Agenda} />
      <Stack.Screen name="Annuaire" component={Annuaire} />
      <Stack.Screen name="Boutique" component={Boutique} />
      <Stack.Screen name="DealsFidelity" component={DealsFidelity} />
      <Stack.Screen name="DetailsArtAg" component={DetailsArtAg} />
      <Stack.Screen name="DetailsBoutique" component={DetailsBoutique} />
      <Stack.Screen name="DetailsDealsFidelite" component={DetailsDealsFidelite} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
